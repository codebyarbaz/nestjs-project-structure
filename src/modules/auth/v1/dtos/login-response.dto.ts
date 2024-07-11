import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class LoginResponseDto {
    @Expose()
    @IsNumber()
    id: number;

    @Expose()
    @IsString()
    email: string;
}