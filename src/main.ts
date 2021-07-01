import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useLogger(['error', 'warn']);

  await app.setGlobalPrefix('api').listen(3000);
}
bootstrap();
