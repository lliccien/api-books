import { UploadFileService } from '@Products/application/upload-file/upload-file.service';
import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ShowProductCoverGetController {
  constructor(private readonly uploadFileService: UploadFileService) {}

  @Get('files/:fileName')
  run(@Param('fileName') fileName: string, @Res() res: Response) {
    try {
      const path = this.uploadFileService.getStaticProductFilePath(fileName);

      res.status(200).sendFile(path);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}
