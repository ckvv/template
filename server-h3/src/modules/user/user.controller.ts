import { authMiddleware } from '#middleware';
import { getValidatedRouterParams, H3 } from 'h3';
import { userSchema } from './user.schema.ts';
import * as userService from './user.service.ts';

export const app = new H3();

app.get('/', async (_event) => {
  const users = await userService.findMany();
  return users;
}, {
  middleware: [authMiddleware()],
});

app.get('/:id', async (event) => {
  const params = await getValidatedRouterParams(event, userSchema.findById.parse);

  const user = await userService.findById(params);
  return user;
}, {
  middleware: [authMiddleware()],
});
