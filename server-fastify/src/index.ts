import { config } from '#config';
import { authRouter, infoRouter, userRouter } from '#modules';
import { logger } from '#utils';
import fastify from 'fastify';

const server = fastify();

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
