import { fileURLToPath, URL } from 'node:url';
import ui from '@nuxt/ui/vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import VueRouter from 'vue-router/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    vueJsx(),
    VueRouter({
      dts: 'src/route-map.d.ts',
      routesFolder: 'src/pages',
    }),
    // https://github.com/nuxt/ui/tree/v4/src/theme
    ui({
      ui: {
        colors: {
          primary: 'violet',
        },
        button: {
          slots: {
            base: 'cursor-pointer',
          },
        },
      },
      autoImport: {
        imports: ['vue'],
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
