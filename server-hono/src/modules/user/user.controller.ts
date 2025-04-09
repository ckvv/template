import type { BlankEnv } from '#type';
import { getValidatedRouterParams } from '#utils';
import { Hono } from 'hono';
import { userSchema } from './user.schema.ts';
import * as userService from './user.service.ts';

const app = new Hono<BlankEnv>();

app.get('/', async (c) => {
  const users = await userService.findMany();
  return c.json(users);
});

app.get('/:id', async (c) => {
  const params = await getValidatedRouterParams(c, userSchema.findById);
  const users = await userService.findById(params);
  return c.json(users);
});

export default app;
