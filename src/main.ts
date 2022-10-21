import { NestFactory } from '@nestjs/core';
import { nestFirstModule } from './nestFirst.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(nestFirstModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
