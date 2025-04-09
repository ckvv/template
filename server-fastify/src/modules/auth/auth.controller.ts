import type { FastifyPluginCallback } from 'fastify';
import { jwt, readValidatedBody } from '#utils';

import { authSchema } from './auth.schema.js';
import * as authService from './auth.service.js';

export const authRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.post('/signin', async (request, reply) => {
    const params = await readValidatedBody(request, authSchema.signin);
    const users = await authService.signin(params);

    reply.setCookie('token', await jwt.sign({
      id: users.id,
    }));
    return reply.send(users);
  });

  fastify.post('/signup', async (request, reply) => {
    const params = await readValidatedBody(request, authSchema.signup);
    const [user] = await authService.signup(params);
    return reply.send(user);
  });

  fastify.post('/signout', async (request, reply) => {
    reply.clearCookie('token');
  });

  fastify.get('/me', async (request, reply) => {
    const user = await authService.me({
      id: request?.user?.id as number,
    });

    return reply.send({
      id: user?.id,
      username: user?.username,
    });
  });
  done();
};
