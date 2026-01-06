import { CustomError, jwt } from '#utils';
import { getCookie, getQuery, onRequest } from 'h3';

export function authMiddleware() {
  return onRequest(async (event) => {
    const token = getCookie(event, 'token') || getQuery(event)?.token || event.req.headers.get('Authorization');
    try {
      const payload = await jwt.verify(token!) as { id: number };
      event.context.user = payload;
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (error) {
      throw new CustomError('PERMISSION_DENIED');
    }
  });
}
