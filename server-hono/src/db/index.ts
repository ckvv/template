import type { NeonHttpDatabase } from 'drizzle-orm/neon-http';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { config } from '#config';
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http';
import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres';
import * as schema from './schema.ts';

export * from './schema.ts';

// eslint-disable-next-line import/no-mutable-exports
let db: NodePgDatabase<typeof schema> | NeonHttpDatabase<typeof schema>;

if (config.IS_NODE) {
  db = drizzleNode(config.DATABASE_URL, {
    schema,
  });
}
else {
  db = drizzleNeon(config.DATABASE_URL, {
    schema,
  });
}

export { db };
