import type { Middleware } from 'h3';
import { logger } from '#utils';

export function loggerMiddleware(): Middleware {
  return async (event, next) => {
    logger.info(`Request: ${event.url}`);
    const rawBody = await next();
    logger.info(`Response: ${event.url}`);
    return rawBody;
  };
};
