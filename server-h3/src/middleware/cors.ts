import { defineEventHandler, handleCors } from 'h3';

export function corsMiddleware() {
  return defineEventHandler(async (event) => {
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
  });
}
