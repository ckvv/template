import type { z } from 'zod';
import type { userSchema } from '../schemas/user.js';
import { and, eq } from 'drizzle-orm';
import { db, users } from '../db/index.js';
import { getRandomStr, toHash } from '../utils/index.js';

export async function signin(params: z.infer<typeof userSchema.signin>) {
  const value = await db.query.users.findFirst({
    where: and(eq(users.username, params.username)),
    // where: (users, { eq, and } ) => and(users.username, params.username)
  });

  if (!value || value.password !== await toHash(`${params.password}${value.salt}`)) {
    throw new Error('用户名密码错误');
  }

  return value;
}

export async function signup(params: z.infer<typeof userSchema.signin>) {
  const value = await db.query.users.findFirst({
    where: and(eq(users.username, params.username)),
    // where: (users, { eq, and } ) => and(users.username, params.username)
  });

  if (value) {
    throw new Error(`用户名: ${value.username}已存在`);
  }

  const salt = getRandomStr(16);
  return create({
    username: params.username,
    password: await toHash(`${params.password}${salt}`),
    salt,
  });
}

export async function list() {
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
