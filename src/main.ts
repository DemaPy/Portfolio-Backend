import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      methods: ['GET', 'POST'],
      origin:
        process.env.MODE === 'DEV'
          ? 'http://localhost:5173'
          : 'https://demchenko.uk',
    },
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
