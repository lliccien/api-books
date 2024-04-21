import { Test, TestingModule } from '@nestjs/testing';
import { DeleteProductByIdService } from './delete-product-by-id.service';

describe('DeleteProductByIdService', () => {
  let service: DeleteProductByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteProductByIdService],
    }).compile();

    service = module.get<DeleteProductByIdService>(DeleteProductByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
