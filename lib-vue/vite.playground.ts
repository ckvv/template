import UnoCSS from 'unocss/vite'
import vue from 'unplugin-vue/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  root: './playground',
  plugins: [vue(), UnoCSS()],
})
