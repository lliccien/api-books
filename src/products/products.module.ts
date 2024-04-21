import { Module } from '@nestjs/common';
import { CreateProductService } from './application/create-product/create-product.service';
import { FindAllProductService } from './application/find-all-product/find-all-product.service';
import { FindProductByIdService } from './application/find-product-by-id/find-product-by-id.service';
import { UpdateProductByIdService } from './application/update-product-by-id/update-product-by-id.service';
import { DeleteProductByIdService } from './application/delete-product-by-id/delete-product-by-id.service';
import { ProductTypeormRepository } from './infrastructure/persistence/product.typeorm.repository';
import { CreateProductPostController } from './controllers/create-product.post/create-product.post.controller';
import { FindAllProductsGetController } from './controllers/find-all-products.get/find-all-products.get.controller';
import { FindProductByIdGetController } from './controllers/find-product-by-id.get/find-product-by-id.get.controller';
import { UpdateProductByIdPatchController } from './controllers/update-product-by-id.patch/update-product-by-id.patch.controller';
import { DeleteProductByIdDeleteController } from './controllers/delete-product-by-id.delete/delete-product-by-id.delete.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './infrastructure/persistence/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [
    {
      provide: 'IProductRepository',
      useClass: ProductTypeormRepository,
    },
    ProductTypeormRepository,
    CreateProductService,
    FindAllProductService,
    FindProductByIdService,
    UpdateProductByIdService,
    DeleteProductByIdService,
  ],
  controllers: [
    CreateProductPostController,
    FindAllProductsGetController,
    FindProductByIdGetController,
    UpdateProductByIdPatchController,
    DeleteProductByIdDeleteController,
  ],
})
export class ProductsModule {}
