import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/**/*'],
  outDir: 'dist',
  platform: 'neutral',
  fromVite: true,
  clean: true,
  dts: { vue: true },
  unbundle: true,
  outputOptions: {},
})
