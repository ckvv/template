import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filters';
import {
  LoggingInterceptor,
  TransformInterceptor,
  TimeoutInterceptor,
} from './interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(
    new TimeoutInterceptor(),
    new TransformInterceptor(),
    new LoggingInterceptor(),
  );
  // 开启跨域
  // app.enableCors();
  await app.listen(3000);
}

bootstrap().catch((err) => {
  console.log(err);
});
