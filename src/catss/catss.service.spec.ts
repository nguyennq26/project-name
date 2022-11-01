import { Test, TestingModule } from '@nestjs/testing';
import { CatssService } from './catss.service';

describe('CatssService', () => {
  let service: CatssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatssService],
    }).compile();

    service = module.get<CatssService>(CatssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
