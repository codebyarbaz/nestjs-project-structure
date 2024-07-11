import { Body, Controller, Post, UseInterceptors, ClassSerializerInterceptor, UseGuards } from '@nestjs/common';

import { AuthServiceV2 } from './auth.service';

import { LoginDto, LoginResponseDto } from './dtos';

import { AuthGuard } from './guards';

import { AUTH_CONSTANTS } from '../auth.constants';

@Controller({
    path: AUTH_CONSTANTS.BASE_ROUTE,
    version: '2',
})
export class AuthControllerV2 {
    constructor(
        private readonly authService: AuthServiceV2
    ) {}

    @UseGuards(AuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    async login(@Body() body: LoginDto): Promise<LoginResponseDto> {
        return this.authService.loginUser(body);
    }
}