import { logger } from '#utils';
import { createMiddleware } from 'hono/factory';

export function loggerMiddleware() {
  return createMiddleware(async (c, next) => {
    c.set('logger', logger);
    logger.info(`[${c.req.method}] ${c.req.url}`);
    await next();
  });
}
