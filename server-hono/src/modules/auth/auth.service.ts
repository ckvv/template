import type { z } from 'zod';
import type { authSchema } from './auth.schema.js';
import { db, users } from '#db';
import { getRandomStr, toHash } from '#utils';
import { eq } from 'drizzle-orm';

export async function signin(params: z.infer<typeof authSchema.signin>) {
  const value = await db.query.users.findFirst({
    where: eq(users.username, params.username),
  });

  if (!value || value.password !== await toHash(`${params.password}${value.salt}`)) {
    throw new Error('用户名密码错误');
  }

  return value;
}

export async function signup(params: z.infer<typeof authSchema.signin>) {
  const value = await db.query.users.findFirst({
    where: eq(users.username, params.username),
  });

  if (value) {
    throw new Error(`用户名: ${value.username}已存在`);
  }

  const salt = getRandomStr(16);

  return db.insert(users).values({
    username: params.username,
    password: await toHash(`${params.password}${salt}`),
    salt,
  }).returning();
}

export async function me(params: z.infer<typeof authSchema.me>) {
  return db.query.users.findFirst({
    where: eq(users.id, params.id),
  });
}
