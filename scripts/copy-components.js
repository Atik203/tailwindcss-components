import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const SECTIONS = ['Application UI', 'Ecommerce', 'Marketing'];

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  
  const items = fs.readdirSync(from);
  for (const item of items) {
    const fromPath = path.join(from, item);
    const toPath = path.join(to, item);
    
    const stat = fs.statSync(fromPath);
    if (stat.isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  }
}

function run() {
  console.log('Copying components to build directory (for production/Vercel)...');
  const targetParent = path.join(rootDir, 'dist', 'raw-components');
  
  if (!fs.existsSync(targetParent)) {
    fs.mkdirSync(targetParent, { recursive: true });
  }
  
  for (const section of SECTIONS) {
    const sourceDir = path.join(rootDir, section);
    const targetDir = path.join(targetParent, section);
    
    if (fs.existsSync(sourceDir)) {
      console.log(`Copying ${section} -> ${targetDir}`);
      copyFolderSync(sourceDir, targetDir);
    }
  }
  console.log('Static components copy complete.');
}

run();
