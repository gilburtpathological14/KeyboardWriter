import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@core': resolve(__dirname, 'src/core'),
      '@components': resolve(__dirname, 'src/components'),
      '@services': resolve(__dirname, 'src/services'),
      '@domain': resolve(__dirname, 'src/domain'),
      '@data': resolve(__dirname, 'src/data'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    target: 'es2022',
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split node_modules into vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Split pages into separate chunks
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1]?.split('.')[0];
            if (pageName) {
              return `page-${pageName.toLowerCase()}`;
            }
          }
          // Split data files
          if (id.includes('/data/')) {
            const dataName = id.split('/data/')[1]?.split('.')[0];
            if (dataName) {
              return `data-${dataName.toLowerCase()}`;
            }
          }
          // Split services
          if (id.includes('/services/') && !id.includes('index.ts')) {
            const serviceName = id.split('/services/')[1]?.split('.')[0];
            if (serviceName) {
              return `service-${serviceName.toLowerCase()}`;
            }
          }
        },
      },
    },
  },
});
