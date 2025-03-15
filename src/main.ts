import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      methods: ['GET', 'POST'],
      origin: process.env.DEV
        ? 'http://localhost:5173'
        : 'http://localhost:5173',
    },
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
