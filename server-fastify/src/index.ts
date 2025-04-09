import { config } from '#config';
import { authMiddleware, fastifyCookie, fastifyCors, formatMiddleware } from '#middleware';
import { authRouter, infoRouter, userRouter } from '#modules';
import { logger } from '#utils';
import fastify from 'fastify';

const server = fastify({
  loggerInstance: logger,
});

server.register(formatMiddleware);
server.register(fastifyCors);
server.register(fastifyCookie);
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
