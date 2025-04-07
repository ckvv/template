import process, { env } from 'node:process';

export const config = {
  PORT: Number.parseInt(env.PORT) || 8787,
  DATABASE_URL: env.DATABASE_URL,
  SECRET: env.SECRET || 'secret',
  IS_NODE: process?.release?.name === 'node',
};
