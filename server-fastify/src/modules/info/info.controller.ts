import type { FastifyPluginAsync } from 'fastify';

export const infoRouter: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    return fastify.format(`hello world`);
  });
};
