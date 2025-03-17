import { env } from 'node:process';
import { drizzle } from 'drizzle-orm/node-postgres';

export *  from './schema.js';
import * as schema from './schema.js';

export const db = drizzle(env.DATABASE_URL!, {
  schema,
});

