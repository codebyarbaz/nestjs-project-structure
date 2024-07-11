import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { AuthControllerV1, AuthServiceV1 } from './v1';
import { AuthControllerV2, AuthServiceV2 } from './v2';

import { AuthMiddleware } from './middlewares';

import { AUTH_CONSTANTS } from './auth.constants';

@Module({
    imports: [],
    exports: [],
    controllers: [AuthControllerV1, AuthControllerV2],
    providers: [AuthServiceV1, AuthServiceV2],
})
export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware)
            .forRoutes({ path: AUTH_CONSTANTS.BASE_ROUTE, method: RequestMethod.GET, version: '1' });
    }
}
