import { Injectable } from "@nestjs/common";

import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthServiceV2 {
    async loginUser(user: LoginDto) {
        return { id: 1, email: user.email, password: user.password };
    }
}