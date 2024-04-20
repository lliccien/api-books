import { Global, Module } from '@nestjs/common';
import { MappersService } from './application/mappers.service';

@Global()
@Module({
  providers: [MappersService],
  exports: [MappersService],
})
export class CommonModule {}
