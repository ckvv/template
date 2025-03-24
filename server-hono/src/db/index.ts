import { env } from 'node:process';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema.js';

export * from './schema.js';

export const db = drizzle(env.DATABASE_URL!, {
  schema,
});
