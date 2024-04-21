import { Test, TestingModule } from '@nestjs/testing';
import { UploadCoverPostController } from './upload-cover.post.controller';

describe('UploadCoverPostController', () => {
  let controller: UploadCoverPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadCoverPostController],
    }).compile();

    controller = module.get<UploadCoverPostController>(UploadCoverPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
