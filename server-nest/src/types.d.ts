import { Request, Response } from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ArgumentsHost } from '@nestjs/common';

declare module '@nestjs/common' {
  interface ArgumentsHost {
    switchToHttp(): {
      getRequest<T = Request>(): T & {
        user: {
          id: number;
          role: string;
        };
      };
      getResponse<T = Response>(): T;
    };
  }
}
