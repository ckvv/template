import type { OpenAPIObject } from 'openapi3-ts/oas31';

export const openApiDocument: OpenAPIObject = {
  openapi: '3.0.0',
  info: {
    title: 'template-server-hono',
    version: '1.0.0',
  },
  paths: {
    '/': {
      get: {
        description: '测试',
        responses: {
          200: {
            code: 0,
            data: 'hello wrold',
          },
        },
      },
    },
  },
};
