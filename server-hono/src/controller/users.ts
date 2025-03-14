import { Hono } from 'hono';
import * as userService from '../service/users.js';

const app = new Hono();

app.get('/list', async (c) => {
  const users = await userService.list();
  return c.json(users);
});

app.get('/i', async (c) => {
  const users = await userService.create();
  return c.json(users);
});

export default app;
