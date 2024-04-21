import { Test, TestingModule } from '@nestjs/testing';
import { UpdateProductByIdPatchController } from './update-product-by-id.patch.controller';

describe('UpdateProductByIdPatchController', () => {
  let controller: UpdateProductByIdPatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateProductByIdPatchController],
    }).compile();

    controller = module.get<UpdateProductByIdPatchController>(UpdateProductByIdPatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
