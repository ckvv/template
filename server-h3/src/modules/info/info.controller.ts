import { createH3 } from 'h3-nightly';

export const app = createH3();

app.get('/', (_event) => {
  return 'info';
});
