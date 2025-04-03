import type { NeonHttpDatabase } from 'drizzle-orm/neon-http';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import process from 'node:process';
import { config } from '#config';
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http';
import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres';
import * as schema from './schema.js';

export * from './schema.js';

// eslint-disable-next-line import/no-mutable-exports
let db: NodePgDatabase<typeof schema> | NeonHttpDatabase<typeof schema>;

if (process?.release?.name === 'node') {
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
