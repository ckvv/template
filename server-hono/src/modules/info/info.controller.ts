import type { BlankEnv } from '#type';
import { Hono } from 'hono';

const app = new Hono<BlankEnv>();

app.get('/', async (c) => {
  return c.text('hello wrold');
});

export default app;
