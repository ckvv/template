import { defineConfig } from 'tsdown';
import vue from 'unplugin-vue/rolldown';

export default defineConfig({
  plugins: [vue()],
  entry: ['./src/index.ts'],
  target: 'ESNext',
  clean: true,
  dts: true,
  platform: 'neutral',
  format: 'esm',
});
