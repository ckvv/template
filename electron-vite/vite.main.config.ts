import { defineConfig } from 'vite'

// Electron Forge expects the main-process bundle to be emitted as main.js.
export default defineConfig({
  build: {
    lib: {
      entry: 'src/main/index.ts',
      fileName: () => 'main.js',
      formats: ['cjs'],
    },
  },
})
