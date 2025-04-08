import { ERRORS } from '#constant';

export { ERRORS } from '#constant';
export class CustomError extends Error {
  code?: number;

  constructor(type: keyof typeof ERRORS, message?: string) {
    super(message || ERRORS[type]?.message);
    this.code = ERRORS[type]?.code || 500;
  }
}
