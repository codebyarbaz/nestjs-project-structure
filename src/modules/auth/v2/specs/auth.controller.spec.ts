import { Test, TestingModule } from '@nestjs/testing';
import { AuthControllerV2 } from '../auth.controller';
import { AuthServiceV2 } from '../auth.service';

describe('AuthControllerV2', () => {
  let controller: AuthControllerV2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthControllerV2],
      providers: [
        {
          provide: AuthServiceV2,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<AuthControllerV2>(AuthControllerV2);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
