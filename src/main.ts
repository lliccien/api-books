import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/services/config.service';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const logger = new Logger('NestApplication');

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      whitelist: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: '*',
    methods: 'GET,PUT,PATCH,POST,DELETE',
  });

  app.setGlobalPrefix('/api');

  await app.listen(configService.get('PORT'), async () => {
    logger.log(
      `Server is running on http://localhost:${configService.get('PORT')}`,
    );
  });
}
bootstrap();
