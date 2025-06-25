import { createServer } from 'node:http';
import { config } from '#config';
import { corsMiddleware, loggerMiddleware } from '#middleware';
import { authRouter, infoRouter, userRouter } from '#modules';
import { logger } from '#utils';
import { H3, toNodeHandler, withBase } from 'h3';

const app = new H3({
  onError: (error) => {
    logger.error(error);
    return {
      status: error.status,
      message: error.data ?? error.message,
    };
  },
});

app.use(corsMiddleware());
app.use(loggerMiddleware());

app.all('/', withBase('/info', infoRouter.handler));
app.all('/auth/**', withBase('/auth', authRouter.handler));
app.all('/user/**', withBase('/user', userRouter.handler));

createServer(toNodeHandler(app))
  .listen(config.PORT)
  .on('listening', () => {
    logger.info(`Ready on http://localhost:${config.PORT}`);
  }); ;
