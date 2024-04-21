import { Test, TestingModule } from '@nestjs/testing';
import { FindProductByIdService } from './find-product-by-id.service';

describe('FindProductByIdService', () => {
  let service: FindProductByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindProductByIdService],
    }).compile();

    service = module.get<FindProductByIdService>(FindProductByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
