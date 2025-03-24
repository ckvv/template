import { Hono } from 'hono';
import { deleteCookie, setCookie } from 'hono/cookie';
import { userSchema } from '../schemas/user.js';
import * as userService from '../service/users.js';

const app = new Hono();

app.post('/signin', async (c) => {
  const params = userSchema.signin.parse(c.req.parseBody());
  const users = await userService.signin(params);

  setCookie(c, 'token', users.username);
  return c.json(users);
});

app.post('/signup', async (c) => {
  const params = userSchema.signup.parse(c.req.parseBody());
  const users = await userService.signup(params);
  return c.json(users);
});

app.post('/signout', async (c) => {
  deleteCookie(c, 'token');
});

export default app;
