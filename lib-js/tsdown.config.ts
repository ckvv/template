import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src/index.ts'],
  target: 'ESNext',
  clean: true,
  dts: true,
  platform: 'neutral',
  format: 'esm',
});
