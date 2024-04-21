import { Test, TestingModule } from '@nestjs/testing';
import { CreateProductPostController } from './create-product.post.controller';

describe('CreateProductPostController', () => {
  let controller: CreateProductPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateProductPostController],
    }).compile();

    controller = module.get<CreateProductPostController>(CreateProductPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
