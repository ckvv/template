import { H3 } from 'h3';

export const app = new H3();

app.get('/', (_event) => {
  return 'hello world';
});
