import { config } from '#config';
import { authMiddleware } from '#middleware';
import { authRouter, infoRouter, userRouter } from '#modules';
import { logger } from '#utils';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import fastify from 'fastify';

const server = fastify({
  loggerInstance: logger,
});

server.register(cors);
server.register(cookie);
server.register(authMiddleware);
server.register(infoRouter);
server.register(userRouter, {
  prefix: '/user',
});
server.register(authRouter, {
  prefix: '/auth',
});

server.listen({ port: config.PORT }, (err) => {
  if (err) {
    logger.error(err);
  }
  else {
    logger.info(`Ready on http://localhost:${config.PORT}`);
  }
});
