import type { BlankEnv } from '../type.js';
import { userSchema } from '#schemas/user.js';
import * as userService from '#service/users.js';
import { Hono } from 'hono';

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
