import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { isObject } from 'class-validator';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Bad Request';
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionRes = exception.getResponse();
      message =
        `${
          isObject(exceptionRes) ? (exceptionRes as any).message : exceptionRes
        }` || exception.message;
    }
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}
