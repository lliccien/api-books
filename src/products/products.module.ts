import { Module } from '@nestjs/common';
import { CreateProductService } from './application/create-product/create-product.service';
import { FindAllProductService } from './application/find-all-product/find-all-product.service';
import { FindProductByIdService } from './application/find-product-by-id/find-product-by-id.service';
import { UpdateProductByIdService } from './application/update-product-by-id/update-product-by-id.service';
import { DeleteProductByIdService } from './application/delete-product-by-id/delete-product-by-id.service';
import { ProductTypeormRepository } from './infrastructure/persistence/product.typeorm.repository';

@Module({
  providers: [
    CreateProductService,
    FindAllProductService,
    FindProductByIdService,
    UpdateProductByIdService,
    DeleteProductByIdService,
    {
      provide: 'IProductRepository',
      useValue: ProductTypeormRepository,
    },
  ],
})
export class ProductsModule {}
