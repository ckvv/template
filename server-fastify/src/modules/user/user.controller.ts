import type { FastifyPluginAsync } from 'fastify';
import { getValidatedRouterParams } from '#utils';
import { userSchema } from './user.schema.ts';

import * as userService from './user.service.ts';

export const userRouter: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    const users = await userService.findMany();
    return fastify.format(users);
  });

  fastify.get('/:id', async (request, reply) => {
    const params = await getValidatedRouterParams(request, userSchema.findById);

    const user = await userService.findById(params);

    return fastify.format(user);
  });
};
