import vue from 'unplugin-vue/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: true,
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      external: ['vue'],
    },
    lib: {
      entry: './src',
      formats: ['es'],
    },
  },
})
