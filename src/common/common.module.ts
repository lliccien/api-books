import { Global, Module } from '@nestjs/common';
import { MappersService } from './application/mappers.service';
import { EncryptedService } from './infrastructure/utils/encrypted/encrypted.service';

@Global()
@Module({
  providers: [MappersService, EncryptedService],
  exports: [MappersService, EncryptedService],
})
export class CommonModule {}
