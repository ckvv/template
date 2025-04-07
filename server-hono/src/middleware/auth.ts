import { CustomError, jwt } from '#utils';
import { getCookie } from 'hono/cookie';
import { createMiddleware } from 'hono/factory';

const whiteList = ['/auth/signup', '/'];

function isInWhiteList(path: string) {
  return whiteList.includes(path);
}

export function authMiddleware() {
  return createMiddleware(async (c, next) => {
    if (isInWhiteList(c.req.path)) {
      return await next();
    }

    const token = getCookie(c, 'token') || c.req.query('token') || c.req.header('Authorization');
    try {
      const payload = await jwt.verify(token!) as { id: number };
      c.set('user', payload);
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (error) {
      throw new CustomError('PERMISSION_DENIED');
    }

    await next();
  });
}
