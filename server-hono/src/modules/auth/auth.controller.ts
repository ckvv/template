import type { BlankEnv } from '#type';
import { jwt } from '#utils';
import { Hono } from 'hono';
import { deleteCookie, setCookie } from 'hono/cookie';
import { authSchema } from './auth.schema.js';
import * as authService from './auth.service.js';

const app = new Hono<BlankEnv>();

app.post('/signin', async (c) => {
  const params = authSchema.signin.parse(await c.req.json());
  const users = await authService.signin(params);

  setCookie(c, 'token', await jwt.sign({
    id: users.id,
  }));
  return c.json(users);
});

app.post('/signup', async (c) => {
  const params = authSchema.signup.parse(await c.req.json());
  const [user] = await authService.signup(params);
  return c.json(user);
});

app.post('/signout', async (c) => {
  deleteCookie(c, 'token');
});

app.get('/me', async (c) => {
  const user = await authService.me({
    id: c.var?.user?.id as number,
  });
  return c.json({
    id: user?.id,
    username: user?.username,
  });
});

export default app;
