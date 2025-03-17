import { Hono } from 'hono';
import * as userService from '../service/users.js';
import { userSchema } from '../schemas/user.js';


const app = new Hono();

app.post('/signin', async (c) => {
  const user = userSchema.signin.parse(c.req.parseBody())
  const users = await userService.list();
  return c.json(users);
});

app.post('/signup', async (c) => {
  const users = await userService.create();
  return c.json(users);
});

app.post('/signout', async (c) => {
  const users = await userService.create();
  return c.json(users);
});

export default app;
