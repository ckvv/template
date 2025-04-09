import { config } from '#config';
import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres';
import * as schema from './schema.js';

export * from './schema.js';

export const db = drizzleNode(config.DATABASE_URL, {
  schema,
});
