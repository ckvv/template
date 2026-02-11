import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nitro } from "nitro/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    nitro({
      serverDir: "./server"
    }),
  ],
  resolve: {
    tsconfigPaths: true
  }
})
