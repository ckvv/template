import * as z from 'zod';

export const signSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(4),
});

export type SignSchema = z.infer<typeof signSchema>;
