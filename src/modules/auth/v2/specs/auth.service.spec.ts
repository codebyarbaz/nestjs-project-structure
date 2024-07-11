import { Test, TestingModule } from '@nestjs/testing';
import { AuthServiceV2 } from '../auth.service';

describe('AuthServiceV2', () => {
  let service: AuthServiceV2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthServiceV2,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<AuthServiceV2>(AuthServiceV2);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
