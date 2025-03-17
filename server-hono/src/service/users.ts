import { db, users } from '../db/index.js';
import type { userSchema } from '../schemas/user.js'
import { z } from 'zod'
import { eq, and } from 'drizzle-orm';

export async function signin(params: z.infer<typeof userSchema.signin>) {
  const value = await db.query.users.findFirst({
    where: and(eq(users.username, params.username))
    // where: (users, { eq, and } ) => and(users.username, params.username)
  })

  return value;
}

export async function list() {
  return db.query.users.findMany();
}

export async function findById(params: z.infer<typeof userSchema.findById>) {
  return db.query.users.findFirst({
    where: and(eq(users.id, params.id))
  });
}

export async function create() {
  return db.insert(users).values({
    username: 'ckvv',
    password: 'ckvv',
    salt: '1234',
  });
}
