import { NestFactory } from '@nestjs/core';
import { nestFirstModule } from './nestFirst.module';

async function bootstrap() {
  const app = await NestFactory.create(nestFirstModule);
  await app.listen(3000);
}
bootstrap();
