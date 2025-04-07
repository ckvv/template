import { jwt } from '#utils';
import { getCookie } from 'hono/cookie';
import { createMiddleware } from 'hono/factory';

export function authMiddleware() {
  return createMiddleware(async (c, next) => {
    // 检查 token
    const token = getCookie(c, 'token') || c.req.query('token') || c.req.header('Authorization');

    const payload = await jwt.verify(token!) as { id: number };
    c.set('user', payload);
    await next();
  });
}
