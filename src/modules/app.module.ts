import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth';

import * as ENVs from '../config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: Object.values(ENVs),
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
