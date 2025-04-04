import type { BlankEnv } from '#type';
import { Hono } from 'hono';
import { userSchema } from './user.schema.js';
import * as userService from './user.servece.js';

const app = new Hono<BlankEnv>();

app.get('/', async (c) => {
  const users = await userService.list();
  return c.json(users);
});

app.get('/:userId', async (c) => {
  const params = userSchema.findById.parse({
    id: c.req.param('userId'),
  });

  const users = await userService.findById(params);
  return c.json(users);
});

app.get('/info', async (c) => {
  // 从 cookie 获取 id
  const users = await userService.findById({
    id: c.var?.user?.id as number,
  });
  return c.json(users);
});

export default app;
