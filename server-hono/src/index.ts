import type { BlankEnv } from '#type';
import { config } from '#config';
import { authMiddleware, corsMiddleware, formatMiddleware, loggerMiddleware } from '#middleware';
import { auth, info, user } from '#modules';
import { logger } from '#utils';
import { Hono } from 'hono';

const app = new Hono<BlankEnv>();

app.use(loggerMiddleware());
app.use(formatMiddleware());
app.use(corsMiddleware());
app.use(authMiddleware());

app.route('/auth', auth);
app.route('/user', user);
app.route('/', info);

if (config.IS_NODE) {
  import('@hono/node-server').then(({ serve }) => {
    serve({
      fetch: app.fetch,
      port: config.PORT,
    }).on('listening', () => {
      logger.info(`Ready on http://localhost:${config.PORT}`);
    });
  });
}

export default app;
