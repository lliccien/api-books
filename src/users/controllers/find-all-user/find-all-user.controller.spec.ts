import { Test, TestingModule } from '@nestjs/testing';
import { FindAllUserController } from './find-all-user.controller';

describe('FindAllUserController', () => {
  let controller: FindAllUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllUserController],
    }).compile();

    controller = module.get<FindAllUserController>(FindAllUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
