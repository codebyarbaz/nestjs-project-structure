import { Body, Controller, Post, ClassSerializerInterceptor, UseGuards, Get, UseInterceptors } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AuthServiceV1 } from './auth.service';

import { LoginDto, LoginResponseDto } from './dtos';
import { ENV_VARIABLES } from '../../../interfaces';

import { AuthUser } from './decorators';
import { AuthGuard } from './guards';
import { AuthLoggingInterceptor } from './interceptors';

import { AUTH_CONSTANTS } from '../auth.constants';
import { User } from '../../../decorators';

@Controller({
    path: AUTH_CONSTANTS.BASE_ROUTE,
    version: '1',
})
export class AuthControllerV1 {
    constructor(
        private readonly authService: AuthServiceV1,
        private readonly configService: ConfigService<ENV_VARIABLES>
    ) {}

    @UseInterceptors(AuthLoggingInterceptor)
    @Get()
    getAuth(@AuthUser() authUser: any) {
        console.log('Auth Decorator -->', authUser);
        return 'Auth Controller';
    }

    @UseGuards(AuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    async login(@Body() body: LoginDto, @User() user: any): Promise<LoginResponseDto> {
        console.log('User decorator -->', user);
        console.log('ENV -->', this.configService.get('NODE_ENV'));
        return this.authService.loginUser(body);
    }
}