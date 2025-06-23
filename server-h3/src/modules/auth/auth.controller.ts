import { jwt } from '#utils';
import { deleteCookie, H3, readValidatedBody, setCookie } from 'h3';
import { authSchema } from './auth.schema.ts';
import * as authService from './auth.service.ts';

export const app = new H3();

app.post('/signin', async (event) => {
  const params = await readValidatedBody(event, authSchema.signin.parse);
  const users = await authService.signin(params);

  setCookie(event, 'token', await jwt.sign({
    id: users.id,
  }));
  return users;
}, {
  meta: {
    auth: true,
  },
});

app.post('/signup', async (event) => {
  const params = await readValidatedBody(event, authSchema.signup.parse);
  const [user] = await authService.signup(params);
  return user;
});

app.post('/signout', async (event) => {
  deleteCookie(event, 'token');
});

app.get('/me', async (event) => {
  const user = await authService.me({
    id: event.context.user.id,
  });
  return user;
});
