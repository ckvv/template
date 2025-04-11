import * as z from 'zod';

export const Sign = z.object({
  username: z.string().min(4),
  password: z.string().min(8),
});
