import { createServer } from 'node:http';
import { authRouter, infoRouter, userRouter } from '#modules';
import { createH3, toNodeHandler, withBase } from 'h3-nightly';

const app = createH3({
  onError: (error) => {
    console.error(error);
  },
  onRequest: (event) => {
    console.warn('Request:', event.url);
  },
});

const baseRouter = createH3();

baseRouter.use('/**', withBase('/info', infoRouter.handler));
baseRouter.use('/auth/**', withBase('/auth', authRouter.handler));
baseRouter.use('/user/**', withBase('/user', userRouter.handler));

app.use(baseRouter);

createServer(toNodeHandler(app)).listen(3000);
