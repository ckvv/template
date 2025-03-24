import path from 'node:path';
import { Application } from '@artusx/utils';

export async function main() {
  const app = await Application.start({
    root: path.resolve(__dirname),
    configDir: 'config',
  });

  return app;
}
