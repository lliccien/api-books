import { ConfigService } from '@Config/services/config.service';
import {
  Controller,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('products')
export class UploadAttachmentsPostController {
  constructor(private readonly configService: ConfigService) {}
  @Post('attachments')
  @UseInterceptors(
    FilesInterceptor('attachments', 5, {
      storage: diskStorage({
        destination: './static/products',
        filename: (req, attachments, cb) => {
          const ext = attachments.originalname.split('.').pop();
          const originalname = attachments.originalname.split('.').shift();
          const secureName = originalname.replace(/\s+/g, '-').trim();
          cb(
            null,
            (attachments.originalname =
              secureName + '-' + new Date().getTime() + '.' + ext!),
          );
        },
      }),
    }),
  )
  run(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1024 * 1024 * 5,
          }),
        ],
      }),
    )
    attachments: Array<Express.Multer.File>,
  ) {
    const filesNames = attachments.map((attachment) => attachment.originalname);

    const secureUrls = attachments.map(
      (attachment) =>
        `${this.configService.get('HOST_API')}/products/files/${attachment.originalname}`,
    );

    return { attachments: filesNames, secureUrls };
  }
}
