import { z } from 'zod';

export const userSchema = {
  signin: z.object({
    username: z.string(),
    password: z.string(),
  }),
  signup: z.object({
    username: z.string(),
    password: z.string(),
  }),
  findById: z.object({
    id: z.coerce.number(),
  }),
  create: z.object({
    username: z.string(),
    password: z.string(),
    salt: z.string(),
  }),
};
