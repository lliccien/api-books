import { Test, TestingModule } from '@nestjs/testing';
import { ShowProductCoverGetController } from './show-product-cover.get.controller';

describe('ShowProductCoverGetController', () => {
  let controller: ShowProductCoverGetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowProductCoverGetController],
    }).compile();

    controller = module.get<ShowProductCoverGetController>(ShowProductCoverGetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
