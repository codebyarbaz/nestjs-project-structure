import { registerAs } from "@nestjs/config";

export const ENVS = registerAs('ENV', () => ({
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
}));