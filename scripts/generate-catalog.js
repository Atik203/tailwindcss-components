import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const SECTIONS = ['Application UI', 'Ecommerce', 'Marketing'];
const catalog = [];

function parseFileName(filename) {
  // Matches: html-light.html, react-system.jsx, vue-dark.vue
  // Format: [flavor]-[theme].[ext]
  let match = filename.match(/^([a-z0-9]+)-([a-z0-9]+)\.([a-z0-9]+)$/i);
  if (match) {
    return {
      flavor: match[1].toLowerCase(), // html, react, vue
      theme: match[2].toLowerCase(),  // light, dark, system
      ext: match[3].toLowerCase()     // html, jsx, vue
    };
  }

  // Matches: html.html, react.jsx, vue.vue (unthemed)
  // Format: [flavor].[ext]
  match = filename.match(/^([a-z0-9]+)\.([a-z0-9]+)$/i);
  if (match) {
    const flavor = match[1].toLowerCase();
    const ext = match[2].toLowerCase();
    if (['html', 'react', 'vue'].includes(flavor)) {
      return {
        flavor,
        theme: 'default',
        ext
      };
    }
  }
  return null;
}

function processComponentDirectory(section, category, subcategory, componentName, componentPath) {
  const versions = [];
  const filesInfo = {};

  try {
    const items = fs.readdirSync(componentPath);
    
    // Check if there are version subdirectories (e.g., v3, v4)
    const versionDirs = items.filter(item => {
      const itemPath = path.join(componentPath, item);
      return fs.statSync(itemPath).isDirectory() && /^v\d+$/i.test(item);
    });

    if (versionDirs.length > 0) {
      for (const vDir of versionDirs) {
        versions.push(vDir);
        filesInfo[vDir] = { html: [], react: [], vue: [] };
        
        const vPath = path.join(componentPath, vDir);
        const files = fs.readdirSync(vPath);
        for (const file of files) {
          const filePath = path.join(vPath, file);
          if (fs.statSync(filePath).isFile()) {
            const parsed = parseFileName(file);
            if (parsed) {
              const { flavor, theme } = parsed;
              if (filesInfo[vDir][flavor]) {
                if (!filesInfo[vDir][flavor].includes(theme)) {
                  filesInfo[vDir][flavor].push(theme);
                }
              }
            }
          }
        }
      }
    } else {
      // Direct files without version subdirectories (fallback)
      const defaultVersion = 'v4';
      versions.push(defaultVersion);
      filesInfo[defaultVersion] = { html: [], react: [], vue: [] };
      
      for (const item of items) {
        const itemPath = path.join(componentPath, item);
        if (fs.statSync(itemPath).isFile()) {
          const parsed = parseFileName(item);
          if (parsed) {
            const { flavor, theme } = parsed;
            if (filesInfo[defaultVersion][flavor]) {
              if (!filesInfo[defaultVersion][flavor].includes(theme)) {
                filesInfo[defaultVersion][flavor].push(theme);
              }
            }
          }
        }
      }
    }

    // Only add to catalog if we found valid files
    const hasFiles = Object.values(filesInfo).some(vInfo => 
      vInfo.html.length > 0 || vInfo.react.length > 0 || vInfo.vue.length > 0
    );

    if (hasFiles) {
      catalog.push({
        id: `${section}-${category}-${subcategory}-${componentName}`.replace(/\s+/g, '-').toLowerCase(),
        section,
        category,
        subcategory,
        name: componentName,
        relativePath: path.relative(rootDir, componentPath).replace(/\\/g, '/'),
        versions: versions.sort().reverse(), // v4 first, then v3
        files: filesInfo
      });
    }
  } catch (err) {
    console.error(`Error processing component: ${componentPath}`, err);
  }
}

function run() {
  console.log('Generating components catalog...');
  let totalComponents = 0;

  for (const section of SECTIONS) {
    const sectionPath = path.join(rootDir, section);
    if (!fs.existsSync(sectionPath)) continue;

    const categories = fs.readdirSync(sectionPath).filter(c => 
      fs.statSync(path.join(sectionPath, c)).isDirectory()
    );

    for (const category of categories) {
      const categoryPath = path.join(sectionPath, category);
      const subcategories = fs.readdirSync(categoryPath).filter(s => 
        fs.statSync(path.join(categoryPath, s)).isDirectory()
      );

      for (const subcategory of subcategories) {
        const subcategoryPath = path.join(categoryPath, subcategory);
        const components = fs.readdirSync(subcategoryPath).filter(c => 
          fs.statSync(path.join(subcategoryPath, c)).isDirectory()
        );

        for (const component of components) {
          const componentPath = path.join(subcategoryPath, component);
          processComponentDirectory(section, category, subcategory, component, componentPath);
          totalComponents++;
        }
      }
    }
  }

  // Ensure public directory exists
  const publicDir = path.join(rootDir, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write catalog to public/components-catalog.json
  const outputPath = path.join(publicDir, 'components-catalog.json');
  fs.writeFileSync(outputPath, JSON.stringify(catalog, null, 2), 'utf-8');
  console.log(`Successfully cataloged ${catalog.length} components (scanned ${totalComponents} dirs).`);
  console.log(`Saved catalog to ${outputPath}`);
}

run();
