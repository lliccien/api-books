import { ConfigService } from '@Config/services/config.service';
import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('products')
export class UploadCoverPostController {
  constructor(private readonly configService: ConfigService) {}
  @Post('cover')
  @UseInterceptors(
    FileInterceptor('cover', {
      storage: diskStorage({
        destination: './static/products',
        filename: (req, cover, cb) => {
          const ext = cover.originalname.split('.').pop();
          const originalname = cover.originalname.split('.').shift();
          cb(
            null,
            (cover.originalname =
              originalname + '-' + new Date().getTime() + '.' + ext!),
          );
        },
      }),
    }),
  )
  run(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({
            fileType: '.(png|jpeg|jpg|webp)',
          }),
          new MaxFileSizeValidator({
            maxSize: 1024 * 1024 * 5,
          }),
        ],
      }),
    )
    cover: Express.Multer.File,
  ) {
    const secureUrl = `${this.configService.get('HOST_API')}/products/files/${cover.originalname}`;
    return {
      cover: cover.originalname,
      secureUrl,
    };
  }
}
