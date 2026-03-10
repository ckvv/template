import { defineConfig } from 'vite'

// Keep the preload bundle name stable for BrowserWindow.preload.
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
        chunkFileNames: '[name].js',
        entryFileNames: 'preload.js',
        format: 'cjs',
        inlineDynamicImports: true,
      },
    },
  },
})
