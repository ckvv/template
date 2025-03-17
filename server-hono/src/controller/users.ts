import { Hono } from 'hono';
import * as userService from '../service/users.js';
import { userSchema } from '../schemas/user.js';

const app = new Hono();

app.get('/', async (c) => {
  const users = await userService.list();
  return c.json(users);
});

app.get('/:userId', async (c) => {
  const params = userSchema.findById.parse({
    id: c.req.param('userId')
  })

  const users = await userService.findById(params);
  return c.json(users);
});

export default app;
