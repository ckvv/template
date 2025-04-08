import { logger } from '#utils';
import { defineEventHandler } from 'h3';

export function loggerMiddleware() {
  return defineEventHandler({
    onRequest: (event) => {
      logger.info(`Request: ${event.url}`);
    },
    onBeforeResponse: (event, _response) => {
      logger.info(`Response: ${event.url}`);
    },
    handler: () => {},
  });
}
