import { Test, TestingModule } from '@nestjs/testing';
import { FindProductByIdGetController } from './find-product-by-id.get.controller';

describe('FindProductByIdGetController', () => {
  let controller: FindProductByIdGetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindProductByIdGetController],
    }).compile();

    controller = module.get<FindProductByIdGetController>(
      FindProductByIdGetController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
