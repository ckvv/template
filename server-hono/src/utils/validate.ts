import type { Context } from 'hono';
import type { TypeOf, ZodType } from 'zod';

export async function validated<T extends ZodType<any, any>>(c: Context, schema: T): Promise<TypeOf<T>> {
  return schema.parse({
    ...await c.req.json(),
    ...c.req.param(),
    ...c.req.query(),
  });
}
export async function readValidatedBody<T extends ZodType<any, any>>(c: Context, schema: T): Promise<TypeOf<T>> {
  return schema.parse(await c.req.json());
}

export async function getValidatedRouterParams<T extends ZodType<any, any>>(c: Context, schema: T): Promise<TypeOf<T>> {
  return schema.parse(c.req.param());
}

export async function getValidatedQuery<T extends ZodType<any, any>>(c: Context, schema: T): Promise<TypeOf<T>> {
  return schema.parse(c.req.query());
}
