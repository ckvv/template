import type { BlankEnv } from '#type';
import { openApiDocument } from '#constant/doc.js';
import { swaggerUI } from '@hono/swagger-ui';
import { Hono } from 'hono';

const app = new Hono<BlankEnv>();

app.get('/', async (c) => {
  return c.text('hello wrold');
});

app.get('/doc', swaggerUI({ spec: openApiDocument, urls: [] }));

export default app;
