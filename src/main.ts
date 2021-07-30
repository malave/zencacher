import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { PORT } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  await app.listen(configService.get(PORT));
}

// noinspection JSIgnoredPromiseFromCall
bootstrap();
