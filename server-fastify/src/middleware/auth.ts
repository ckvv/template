import { CustomError, jwt } from '#utils';
import fp from 'fastify-plugin';

const whiteList = ['/auth/signup', '/auth/signin'];

function isInWhiteList(path: string) {
  return whiteList.includes(path);
}

export const authMiddleware = fp(async (fastify, opts) => {
  fastify.decorateRequest('user');
  fastify.addHook('preHandler', async (request, reply) => {
    if (isInWhiteList(request.url)) {
      return;
    }

    const token = request.cookies?.token || (request.query as { [key: string]: string }).token || (Array.isArray(request.headers.Authorization) ? request.headers.Authorization?.[0] : request.headers.Authorization);

    if (!token) {
      throw new CustomError('PERMISSION_DENIED');
    }

    try {
      const payload = await jwt.verify(token) as { id: number };
      request.user = payload;
    }
    catch (error) {
      throw new CustomError('PERMISSION_DENIED');
    }
  });
});
