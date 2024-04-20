import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/services/config/config.service';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const logger = new Logger('NestApplication');

  await app.listen(configService.get('PORT') || 3000, async () => {
    logger.log(
      `Server is running on http://localhost:${configService.get('PORT') || 3000}`,
    );
  });
}
bootstrap();
