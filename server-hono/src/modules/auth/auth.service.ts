import type { TypeOf } from 'zod';
import type { authSchema } from './auth.schema.ts';
import { db, users } from '#db';
import { CustomError, getRandomStr, toHash } from '#utils';

import { eq } from 'drizzle-orm';

export async function signin(params: TypeOf<typeof authSchema.signin>) {
  const value = await db.query.users.findFirst({
    where: eq(users.username, params.username),
  });

  if (!value || value.password !== await toHash(`${params.password}${value.salt}`)) {
    throw new CustomError('UNAUTHORIZED');
  }

  return {
    id: value.id,
    username: value.username,
  };
}

export async function signup(params: TypeOf<typeof authSchema.signin>) {
  const value = await db.query.users.findFirst({
    where: eq(users.username, params.username),
  });

  if (value) {
    throw new CustomError('DATA_ALREADY_EXIST');
  }

  const salt = getRandomStr(16);

  return db.insert(users).values({
    username: params.username,
    password: await toHash(`${params.password}${salt}`),
    salt,
  }).returning();
}

export async function me(params: TypeOf<typeof authSchema.me>) {
  return db.query.users.findFirst({
    columns: {
      id: true,
      username: true,
    },
    where: eq(users.id, params.id),
  });
}
