import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app.module';

import { CONSTANTS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(CONSTANTS.BASE_API_PRIFIX);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: CONSTANTS.API_DEFAULT_VERSION
  });

  await app.listen(3000);
}
bootstrap();
