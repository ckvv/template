import type { FastifyPluginCallback } from 'fastify';
import { getValidatedRouterParams } from '#utils';
import { userSchema } from './user.schema.js';

import * as userService from './user.service.js';

export const userRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/', async (request, reply) => {
    const users = await userService.findMany();
    reply.send(users);
  });

  fastify.get('/:id', async (request, reply) => {
    const params = await getValidatedRouterParams(request, userSchema.findById);

    const user = await userService.findById(params);

    reply.send(user);
  });
  done();
};
