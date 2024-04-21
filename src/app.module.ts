import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule, DatabaseModule, ProductsModule, CommonModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
