import { Body, Controller, Post, UseInterceptors, ClassSerializerInterceptor, UseGuards, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AuthServiceV1 } from './auth.service';

import { LoginDto, LoginResponseDto } from './dtos';
import { ENV_VARIABLES } from '../../../interfaces';

import { AuthGuard } from './guards';

import { AUTH_CONSTANTS } from '../auth.constants';

@Controller({
    path: AUTH_CONSTANTS.BASE_ROUTE,
    version: '1',
})
export class AuthControllerV1 {
    constructor(
        private readonly authService: AuthServiceV1,
        private readonly configService: ConfigService<ENV_VARIABLES>
    ) {}

    @Get()
    getAuth() {
        return 'Auth Controller';
    }

    @UseGuards(AuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    async login(@Body() body: LoginDto): Promise<LoginResponseDto> {
        console.log('ENV -->', this.configService.get('NODE_ENV'));
        return this.authService.loginUser(body);
    }
}