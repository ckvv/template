import type { z } from 'zod';
import type { userSchema } from './user.schema.js';
import { db, users } from '#db';
import { eq } from 'drizzle-orm';

export async function findMany() {
  return db.query.users.findMany({
    columns: {
      id: true,
      username: true,
    },
  });
}

export async function findById(params: z.infer<typeof userSchema.findById>) {
  return db.query.users.findFirst({
    where: eq(users.id, params.id),
  });
}

export async function create(params: z.infer<typeof userSchema.create>) {
  return db.insert(users).values(params);
}
