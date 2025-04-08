import { createH3 } from 'h3';

export const app = createH3();

app.get('/', (_event) => {
  return 'hello world';
});
