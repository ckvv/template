import { z } from 'zod';

export const userSchema = {
  findById: z.object({
    id: z.coerce.number(),
  }),
  create: z.object({
    username: z.string(),
    password: z.string(),
    salt: z.string(),
  }),
};
