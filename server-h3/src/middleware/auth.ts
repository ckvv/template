import { CustomError, jwt } from '#utils';
import { defineEventHandler, getCookie, getQuery } from 'h3';

const whiteList = ['/auth/signup', '/auth/signin', '/'];

function isInWhiteList(path: string) {
  return whiteList.includes(path);
}

export function authMiddleware() {
  return defineEventHandler({
    onRequest: async (event) => {
      if (isInWhiteList(event.url.pathname)) {
        return;
      }
      const token = getCookie(event, 'token') || getQuery(event)?.token || event.req.headers.get('Authorization');
      try {
        const payload = await jwt.verify(token!) as { id: number };

        event.context.user = payload;
      }
      // eslint-disable-next-line unused-imports/no-unused-vars
      catch (error) {
        throw new CustomError('PERMISSION_DENIED');
      }
    },
    handler: () => {},
  });
}
