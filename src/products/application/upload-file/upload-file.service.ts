import { Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class UploadFileService {
  getStaticProductFilePath(fileName: string) {
    const path = join(__dirname, '../../../../static/products', fileName);
    if (!existsSync(path)) {
      throw new Error('file not found');
    }
    return path;
  }
}
