import process, { env } from 'node:process';
import 'dotenv/config';

export const config = {
  PORT: Number.parseInt(env.PORT) || 8787,
  DATABASE_URL: env.DATABASE_URL,
  SECRET: env.SECRET,
  IS_NODE: process?.release?.name === 'node',
};
