import { Injectable } from "@nestjs/common";

import { LoginDto } from './dtos/login.dto';

import { AuthUser } from './interfaces';

@Injectable()
export class AuthServiceV1 {
    async loginUser(user: LoginDto): Promise<AuthUser> {
        return { id: 1, email: user.email, password: user.password };
    }
}