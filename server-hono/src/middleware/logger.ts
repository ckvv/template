import { createMiddleware } from 'hono/factory';
import { logger } from '../utils/logger.js';

export function loggerMiddleware() {
  return createMiddleware(async (c, next) => {
    c.set('logger', logger);
    logger.error(`[${c.req.method}] ${c.req.url}`);
    await next();
  });
}
