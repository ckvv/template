import { createMiddleware } from 'hono/factory';

export function formatMiddleware() {
  return createMiddleware(async (c, next) => {
    try {
      await next();
      if (c.error) {
        return c.res = c.json({
          code: 200,
          message: c.error.message,
        });
      }

      const type = c.res.headers.get('Content-Type')?.split(';')[0].trim();

      switch (type) {
        case 'application/json':
          c.res = c.json({
            code: 0,
            data: await c.res.json(),
          });
          break;
        case 'text/plain':
          c.res = c.json({
            code: 0,
            data: await c.res.text(),
          });
          break;
        default:
          break;
      }
    }
    catch (error) {
      return c.json({
        code: 500,
        message: error,
      });
    }
  });
}
