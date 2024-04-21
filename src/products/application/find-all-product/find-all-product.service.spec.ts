import { Test, TestingModule } from '@nestjs/testing';
import { FindAllProductService } from './find-all-product.service';

describe('FindAllProductService', () => {
  let service: FindAllProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllProductService],
    }).compile();

    service = module.get<FindAllProductService>(FindAllProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
