import { Test, TestingModule } from '@nestjs/testing';
import { DeleteProductByIdDeleteController } from './delete-product-by-id.delete.controller';

describe('DeleteProductByIdDeleteController', () => {
  let controller: DeleteProductByIdDeleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteProductByIdDeleteController],
    }).compile();

    controller = module.get<DeleteProductByIdDeleteController>(
      DeleteProductByIdDeleteController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
