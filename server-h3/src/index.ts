import { createServer } from 'node:http';
import { config } from '#config';
import { authMiddleware, corsMiddleware, loggerMiddleware } from '#middleware';
import { authRouter, infoRouter, userRouter } from '#modules';
import { logger } from '#utils';
import { createH3, toNodeHandler, withBase } from 'h3';

const app = createH3({
  onError: (error) => {
    logger.error(error);
  },
});

app.use(corsMiddleware());
app.use(loggerMiddleware());
app.use(authMiddleware());

app.use('/**', withBase('/info', infoRouter.handler));
app.use('/auth/**', withBase('/auth', authRouter.handler));
app.use('/user/**', withBase('/user', userRouter.handler));

createServer(toNodeHandler(app))
  .listen(config.PORT)
  .on('listening', () => {
    logger.info(`Ready on http://localhost:${config.PORT}`);
  }); ;
