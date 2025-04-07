import { cors } from 'hono/cors';
import { createMiddleware } from 'hono/factory';

export function corsMiddleware() {
  return createMiddleware(cors({
    origin: (origin, _c) => origin || '*',
  }));
}
