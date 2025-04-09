import type { FastifyRequest } from 'fastify';
import type { TypeOf, ZodType } from 'zod';

export async function validated<T extends ZodType<any, any>>(request: FastifyRequest, schema: T): Promise<TypeOf<T>> {
  return schema.parse({
    ...request.body as any,
    ...request.params as any,
  });
}
export async function readValidatedBody<T extends ZodType<any, any>>(request: FastifyRequest, schema: T): Promise<TypeOf<T>> {
  return schema.parse(request.body);
}

export async function getValidatedRouterParams<T extends ZodType<any, any>>(request: FastifyRequest, schema: T): Promise<TypeOf<T>> {
  return schema.parse(request.params);
}
