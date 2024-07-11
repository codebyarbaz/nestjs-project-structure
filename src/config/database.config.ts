import { registerAs } from "@nestjs/config";

export const DATABASE = registerAs('DATABASE', () => ({
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
}));