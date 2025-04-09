import type { FastifyPluginAsync } from 'fastify';
import { getValidatedRouterParams } from '#utils';
import { userSchema } from './user.schema.js';

import * as userService from './user.service.js';

export const userRouter: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    const users = await userService.findMany();
    return users;
  });

  fastify.get('/:id', async (request, reply) => {
    const params = await getValidatedRouterParams(request, userSchema.findById);

    const user = await userService.findById(params);

    return user;
  });
};
