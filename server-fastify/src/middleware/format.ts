import { createError, CustomError } from '#utils';
import fp from 'fastify-plugin';
import { ZodError } from 'zod';

export const formatMiddleware = fp(async (fastify, opts) => {
  fastify.decorate('format', (data) => {
    return {
      code: 200,
      data,
    };
  });

  fastify.setErrorHandler(async (error, request, reply) => {
    switch (true) {
      case error instanceof ZodError:
        return createError('VALIDATION_FAILED', error.issues);
      case error instanceof CustomError:
        return createError(error);
      default:
        return createError('INTERNAL_SERVER_ERROR');
    }
  });

  fastify.setNotFoundHandler(async (request, reply) => {
    return createError('NOT_FOUND');
  });
});
