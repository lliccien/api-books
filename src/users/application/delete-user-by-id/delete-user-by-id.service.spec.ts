import { Test, TestingModule } from '@nestjs/testing';
import { DeleteUserByIdService } from './delete-user-by-id.service';

describe('DeleteUserByIdService', () => {
  let service: DeleteUserByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteUserByIdService],
    }).compile();

    service = module.get<DeleteUserByIdService>(DeleteUserByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
