import type { BlankEnv } from '#type';
import { Hono } from 'hono';
import { userSchema } from './user.schema.js';
import * as userService from './user.service.js';

const app = new Hono<BlankEnv>();

app.get('/', async (c) => {
  const users = await userService.findMany();
  return c.json(users);
});

app.get('/:userId', async (c) => {
  const params = userSchema.findById.parse({
    id: c.req.param('userId'),
  });

  const users = await userService.findById(params);
  return c.json(users);
});

export default app;
