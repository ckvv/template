import { CustomError, ERRORS } from '#utils';
import { createMiddleware } from 'hono/factory';
import { ZodError } from 'zod';

export function formatMiddleware() {
  return createMiddleware(async (c, next) => {
    try {
      await next();
      if (c.error) {
        switch (true) {
          case c.error instanceof ZodError:
            c.res = c.json({
              ...ERRORS.VALIDATION_FAILED,
              errors: c.error.issues,
            });
            break;
          case c.error instanceof CustomError:
            c.res = c.json({
              code: c.error?.code || 200,
              message: c.error.message,
            });
            break;
          default:
            c.res = c.json({
              code: 500,
              message: c.error.message,
            });
            break;
        }
        return;
      }

      if (c.res.status !== 200) {
        return;
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
            code: 10,
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
