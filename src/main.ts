import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app.module';

import { LoggingInterceptor } from './interceptors';

import { CONSTANTS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(CONSTANTS.BASE_API_PRIFIX);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: CONSTANTS.API_DEFAULT_VERSION,
  });

  app.useGlobalInterceptors(new LoggingInterceptor());

  await app.listen(3000);
}
bootstrap();
