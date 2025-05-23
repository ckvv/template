import type { FastifyPluginAsync } from 'fastify';
import { jwt, readValidatedBody } from '#utils';

import { authSchema } from './auth.schema.ts';
import * as authService from './auth.service.ts';

export const authRouter: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post('/signin', async (request, reply) => {
    const params = await readValidatedBody(request, authSchema.signin);
    const users = await authService.signin(params);

    reply.setCookie('token', await jwt.sign({
      id: users.id,
    }), {
      path: '/',
    });
    return fastify.format(users);
  });

  fastify.post('/signup', async (request, reply) => {
    const params = await readValidatedBody(request, authSchema.signup);
    const [user] = await authService.signup(params);
    return fastify.format(user);
  });

  fastify.post('/signout', async (request, reply) => {
    reply.clearCookie('token');
  });

  fastify.get('/me', async (request, reply) => {
    const user = await authService.me({
      id: request?.user?.id as number,
    });

    return fastify.format({
      id: user?.id,
      username: user?.username,
    });
  });
};
