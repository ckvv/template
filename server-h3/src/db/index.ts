import { config } from '#config';
import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres';
import * as schema from './schema.ts';

export * from './schema.ts';

export const db = drizzleNode(config.DATABASE_URL, {
  schema,
});
