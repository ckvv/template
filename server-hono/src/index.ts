/* eslint-disable perfectionist/sort-imports */
import 'dotenv/config';
import type { BlankEnv } from './type.js';
import process from 'node:process';
import { Hono } from 'hono';
import { corsMiddleware, formatMiddleware, loggerMiddleware } from './middleware/index.js';
import { logger } from './utils/logger.js';
import info from './controller/info.js';
import users from './controller/users.js';

const app = new Hono<BlankEnv>();

app.onError((error, c) => {
  c.var.logger.error(error);
  return c.json({
    success: false,
    error,
  });
});

app.use(loggerMiddleware());
app.use(formatMiddleware());
app.use(corsMiddleware());

app.route('/user', users);
app.route('/', info);

if (process?.release?.name === 'node') {
  import('@hono/node-server').then(({ serve }) => {
    serve({
      fetch: app.fetch,
      port: Number.parseInt(process.env.PORT),
    }).on('listening', () => {
      logger.info(`Ready on http://localhost:${process.env.PORT}`);
    });
  });
}

export default app;
