import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ConfigModule, DatabaseModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
