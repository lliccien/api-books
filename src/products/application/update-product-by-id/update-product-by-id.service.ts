import { MappersService } from '@Common/application/mappers.service';
import { UpdateProductDto } from '@Products/controllers/dtos/update-product-dto';
import { Product } from '@Products/domain/product';
import { ProductRepository } from '@Products/domain/product.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateProductByIdService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
    private readonly mappersService: MappersService,
  ) {}
  async execute(id: string, product: UpdateProductDto): Promise<Product> {
    try {
      const productFound = await this.productRepository.findProductById(id);
      if (!productFound) {
        throw new Error('Product not found');
      }

      if (Object.keys(product).length === 0) {
        throw new Error('Product data is required');
      }

      const updatedProduct = await this.productRepository.updateProductById(
        id,
        product,
      );

      return this.mappersService.entityToClass(updatedProduct, Product);
    } catch (error) {
      throw new Error(error);
    }
  }
}
