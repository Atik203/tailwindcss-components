import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'raw-components-server',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.startsWith('/raw-components/')) {
            const urlPath = decodeURIComponent(req.url.slice('/raw-components/'.length).split('?')[0]);
            const absolutePath = path.join(__dirname, urlPath);
            
            // Security check to prevent directory traversal
            if (!absolutePath.startsWith(__dirname)) {
              res.statusCode = 403;
              res.end('Access denied');
              return;
            }

            try {
              if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
                const ext = path.extname(absolutePath);
                let contentType = 'text/plain; charset=utf-8';
                if (ext === '.html') {
                  contentType = 'text/html; charset=utf-8';
                }
                res.setHeader('Content-Type', contentType);
                res.setHeader('Access-Control-Allow-Origin', '*');
                const content = fs.readFileSync(absolutePath);
                res.end(content);
                return;
              } else {
                res.statusCode = 404;
                res.end('File not found');
                return;
              }
            } catch (err) {
              res.statusCode = 500;
              res.end('Server error: ' + err.message);
              return;
            }
          }
          next();
        });
      }
    }
  ]
});
