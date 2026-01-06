import type { Middleware } from 'h3';
import { handleCors } from 'h3';

export function corsMiddleware(): Middleware {
  return async (event) => {
    const corsRes = handleCors(event, {
      origin: '*',
      preflight: {
        statusCode: 204,
      },
      methods: '*',
    });
    if (corsRes) {
      return corsRes;
    }
  };
};
