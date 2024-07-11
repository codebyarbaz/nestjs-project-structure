import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Auth Interceptor before handler...');

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`Auth Interceptor after handler...... ${Date.now() - now}ms`)));
  }
}
