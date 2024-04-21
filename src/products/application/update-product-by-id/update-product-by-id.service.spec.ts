import { Test, TestingModule } from '@nestjs/testing';
import { UpdateProductByIdService } from './update-product-by-id.service';

describe('UpdateProductByIdService', () => {
  let service: UpdateProductByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateProductByIdService],
    }).compile();

    service = module.get<UpdateProductByIdService>(UpdateProductByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
