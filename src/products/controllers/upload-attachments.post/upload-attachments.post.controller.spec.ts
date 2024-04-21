import { Test, TestingModule } from '@nestjs/testing';
import { UploadAttachmentsPostController } from './upload-attachments.post.controller';

describe('UploadAttachmentsPostController', () => {
  let controller: UploadAttachmentsPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadAttachmentsPostController],
    }).compile();

    controller = module.get<UploadAttachmentsPostController>(UploadAttachmentsPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
