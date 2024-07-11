import { Test, TestingModule } from '@nestjs/testing';
import { AuthControllerV1 } from '../auth.controller';
import { AuthServiceV1 } from '../auth.service';

describe('AuthControllerV1', () => {
  let controller: AuthControllerV1;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthControllerV1],
      providers: [
        {
          provide: AuthServiceV1,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<AuthControllerV1>(AuthControllerV1);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
