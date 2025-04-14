import type { BlankEnv } from '#type';
import { jwt, readValidatedBody } from '#utils';
import { Hono } from 'hono';
import { deleteCookie, setCookie } from 'hono/cookie';
import { authSchema } from './auth.schema.ts';
import * as authService from './auth.service.ts';

const app = new Hono<BlankEnv>();

app.post('/signin', async (c) => {
  const params = await readValidatedBody(c, authSchema.signin);
  const users = await authService.signin(params);
  const token = await jwt.sign({
    id: users.id,
  });
  setCookie(c, 'token', token, {
    maxAge: 3600 * 24,
  });
  return c.json({
    ...users,
    token,
  });
});

app.post('/signup', async (c) => {
  const params = await readValidatedBody(c, authSchema.signup);
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
