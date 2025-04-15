import process, { env } from 'node:process';
import 'dotenv/config';

export const config = {
  PORT: Number.parseInt(env.PORT) || 8787,
  DATABASE_URL: env.DATABASE_URL,
  GITHUB_OAUTH_CLIENT_ID: env.GITHUB_OAUTH_CLIENT_ID,
  GITHUB_OAUTH_SECRET: env.GITHUB_OAUTH_SECRET,
  SECRET: env.SECRET || 'secret',
  IS_NODE: process?.release?.name === 'node',
};
