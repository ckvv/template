import { ERRORS } from '#constant';

export { ERRORS } from '#constant';

export class CustomError extends Error {
  code?: number;
  error?: unknown;
  constructor(type: keyof typeof ERRORS | { code: number; message: string; error?: unknown }, error?: unknown) {
    const err = createError(type, error);
    super(err.message);
    this.code = err.code;
    this.error = err.error;
  }
}

export function createError(type: keyof typeof ERRORS | { code: number; message: string; error?: unknown }, error?: unknown) {
  return typeof type === 'string'
    ? {
        ...ERRORS[type],
        error,
      }
    : {
        code: type.code,
        message: type.message,
        error: type.error,
      };
}
