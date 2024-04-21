import { MappersService } from '@Common/application/mappers.service';
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
  async execute(id: string, productDto: any): Promise<Product> {
    try {
      const productFound = await this.productRepository.findProductById(id);
      if (!productFound) {
        throw new Error('Product not found');
      }
      const updatedProduct = await this.productRepository.updateProductById(
        id,
        productDto,
      );

      return this.mappersService.entityToClass(updatedProduct, Product);
    } catch (error) {
      throw new Error(error);
    }
  }
}
