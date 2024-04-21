import { Test, TestingModule } from '@nestjs/testing';
import { UpdateUserByIdController } from './update-user-by-id.controller';

describe('UpdateUserByIdController', () => {
  let controller: UpdateUserByIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateUserByIdController],
    }).compile();

    controller = module.get<UpdateUserByIdController>(UpdateUserByIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
