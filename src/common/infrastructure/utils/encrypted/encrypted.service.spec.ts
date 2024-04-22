import { Test, TestingModule } from '@nestjs/testing';
import { EncryptedService } from './encrypted.service';

describe('EncryptedService', () => {
  let service: EncryptedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncryptedService],
    }).compile();

    service = module.get<EncryptedService>(EncryptedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
