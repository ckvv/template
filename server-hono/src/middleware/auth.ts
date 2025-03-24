import { getCookie } from 'hono/cookie';
import { createMiddleware } from 'hono/factory';

export function authMiddleware() {
  return createMiddleware(async (c, next) => {
    // 检查 token
    const token = getCookie(c, 'token');
    c.set('user', {
      username: token,
    });
    await next();
  });
}
