import { Test, TestingModule } from '@nestjs/testing';
import { FindAllProductsGetController } from './find-all-products.get.controller';

describe('FindAllProductsGetController', () => {
  let controller: FindAllProductsGetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllProductsGetController],
    }).compile();

    controller = module.get<FindAllProductsGetController>(
      FindAllProductsGetController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
