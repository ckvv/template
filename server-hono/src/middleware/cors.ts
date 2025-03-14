import { cors as _cors } from 'hono/cors';
import { createMiddleware } from 'hono/factory';

export function corsMiddleware() {
  return createMiddleware(_cors({
    origin: (origin, _c) => origin || '*',
  }));
}
