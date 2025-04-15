import { pgTable, serial, timestamp, unique, varchar } from 'drizzle-orm/pg-core';

const timestamps = {
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp(),
  deleted_at: timestamp(),
};

export const users = pgTable('users', {
  id: serial().primaryKey().notNull(),
  username: varchar().notNull(),
  password: varchar().notNull(),
  salt: varchar().notNull(),
  source: varchar(),
  sourceid: varchar(),
  ...timestamps,
}, table => [
  unique('users_username_unique').on(table.username),
]);
