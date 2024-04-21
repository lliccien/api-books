import { Test, TestingModule } from '@nestjs/testing';
import { DeleteUserByIdController } from './delete-user-by-id.controller';

describe('DeleteUserByIdController', () => {
  let controller: DeleteUserByIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteUserByIdController],
    }).compile();

    controller = module.get<DeleteUserByIdController>(DeleteUserByIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
