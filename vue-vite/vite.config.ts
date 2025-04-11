import { fileURLToPath, URL } from 'node:url';
import ui from '@nuxt/ui/vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    vueJsx(),
    VueRouter({
      routesFolder: 'src/pages',
    }),
    // https://github.com/nuxt/ui/tree/v3/src/theme
    ui({
      ui: {
        colors: {
          primary: 'blue',
        },
        button: {
          slots: {
            base: 'cursor-pointer',
          },
        },
      },
      components: {
        dts: true,
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
