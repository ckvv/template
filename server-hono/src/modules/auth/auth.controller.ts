import type { BlankEnv } from '#type';
import { config } from '#config';
import { CustomError, getValidatedQuery, jwt, readValidatedBody } from '#utils';
import { Hono } from 'hono';
import { deleteCookie, setCookie } from 'hono/cookie';
import { authSchema } from './auth.schema.ts';
import * as authService from './auth.service.ts';

const app = new Hono<BlankEnv>();

app.post('/signin', async (c) => {
  const params = await readValidatedBody(c, authSchema.signin);
  const user = await authService.signin(params);
  const token = await jwt.sign({
    id: user.id,
  });
  setCookie(c, 'token', token, {
    maxAge: 3600 * 24,
  });
  return c.json({
    ...user,
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

app.get('/github/callback', async (c) => {
  const query = await getValidatedQuery(c, authSchema.githubCallback);
  const response = await (await fetch(`https://github.com/login/oauth/access_token?${new URLSearchParams({
    client_id: config.GITHUB_OAUTH_CLIENT_ID,
    client_secret: config.GITHUB_OAUTH_SECRET,
    code: query.code,
  })}`, {
    method: 'post',
    headers: {
      accept: 'application/json',
    },
  })).json();

  if (response.error) {
    throw new CustomError('PERMISSION_DENIED', response.error_description);
  }

  const githubUser = await (await fetch(`https://api.github.com/user`, {
    headers: {
      accept: 'application/json',
      Authorization: `${response.token_type} ${response.access_token}`,
    },
  })).json();
  if (githubUser.error) {
    throw new CustomError('PERMISSION_DENIED', response.error_description);
  }

  c.var.logger.info(response);
  c.var.logger.info(githubUser);

  const { id, login, email } = githubUser;

  const user = await authService.signupGithubUser({
    username: login || email,
    sourceid: id,
  });

  const token = await jwt.sign({
    id: user.id,
  });
  setCookie(c, 'token', token, {
    maxAge: 3600 * 24,
  });

  return c.redirect(`http://localhost:5173/about/?token=${token}`, 301);
});

export default app;
