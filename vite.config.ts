import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";
import { copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    viteSourceLocator({
      prefix: "mgx",
    }),
    react(),
    // Custom plugin to copy web.config to dist folder
    {
      name: 'copy-web-config',
      closeBundle() {
        try {
          copyFileSync(
            path.resolve(__dirname, '../../web.config'),
            path.resolve(__dirname, 'dist/web.config')
          );
          console.log('✅ web.config copied to dist folder');
        } catch (error) {
          console.warn('⚠️ Could not copy web.config:', error.message);
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173,
    strictPort: true, // Fail if port is already in use
    allowedHosts: [
      'smartsuitex.com',
      'www.smartsuitex.com',
      '20.51.127.168',
      'localhost',
      '127.0.0.1'
    ]
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'smartsuitex.com',
      'www.smartsuitex.com', 
      '20.51.127.168',
      'localhost',
      '127.0.0.1'
    ]
  },
}));