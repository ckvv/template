import type { TypeOf } from 'zod';
import type { authSchema } from './auth.schema.ts';
import { db, users } from '#db';
import { CustomError, getRandomStr, toHash } from '#utils';

import { and, eq } from 'drizzle-orm';

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

export async function signupGithubUser(params: TypeOf<typeof authSchema.signupGithubUser>) {
  const gituser = await db.query.users.findFirst({
    where: and(eq(users.sourceid, params.sourceid)),
  });
  if (gituser) {
    return gituser;
  }

  const _user = await db.query.users.findFirst({
    where: and(eq(users.username, params.username)),
  });

  const username = !_user ? params.username : `${params.username}_${getRandomStr(16)}`;

  return (await db.insert(users).values({
    username,
    password: '',
    salt: '',
    source: 'github',
    sourceid: params.sourceid,
  }).returning()).at(0)!;
}
