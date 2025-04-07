import type { z } from 'zod';
import type { userSchema } from './user.schema.js';
import { db, users } from '#db';
import { and, eq } from 'drizzle-orm';

export async function findMany() {
  return db.query.users.findMany();
}

export async function findById(params: z.infer<typeof userSchema.findById>) {
  return db.query.users.findFirst({
    where: and(eq(users.id, params.id)),
  });
}

export async function create(params: z.infer<typeof userSchema.create>) {
  return db.insert(users).values(params);
}
