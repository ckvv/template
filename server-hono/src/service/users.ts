import { db, schema } from '../db/index.js';

export async function list() {
  return db.select().from(schema.users);
}

export async function create() {
  return db.insert(schema.users).values({
    username: 'ckvv',
    password: 'ckvv',
    salt: '1234',
  });
}
