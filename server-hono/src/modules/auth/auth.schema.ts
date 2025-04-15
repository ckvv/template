import { z } from 'zod';

export const authSchema = {
  signin: z.object({
    username: z.string(),
    password: z.string(),
  }),
  signup: z.object({
    username: z.string(),
    password: z.string(),
  }),
  me: z.object({
    id: z.coerce.number(),
  }),
  githubCallback: z.object({
    code: z.string(),
  }),
  signupGithubUser: z.object({
    username: z.string(),
    sourceid: z.string(),
  }),
};
