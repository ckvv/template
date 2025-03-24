import type { Request } from 'express';

export const getReqParms = (request: Request) => {
  return Object.assign(
    {},
    request.query,
    request.params,
    request.body,
  ) as Record<string, any>;
};

export function toUpperCase(params: string) {
  return params.toUpperCase();
}
