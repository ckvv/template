import type { Request } from 'express';

export const getReqParms = (request: Request) => {
  return Object.assign({}, request.query, request.params, request.body);
};
