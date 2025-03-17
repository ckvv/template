import { createMiddleware } from 'hono/factory';

export function authMiddleware() {
  return createMiddleware(async (c, next) => {
    // 检查 token
    await next();
  });
}
