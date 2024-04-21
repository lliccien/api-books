import { MappersService } from '@Common/application/mappers.service';
import { Product } from '@Products/domain/product.domain';
import { ProductRepository } from '@Products/domain/product.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindProductByIdService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
    private readonly mappersService: MappersService,
  ) {}

  async execute(id: string): Promise<Product> {
    try {
      const productFound = await this.productRepository.findProductById(id);
      if (!productFound) {
        throw new Error('Product not found');
      }
      return this.mappersService.entityToClass(productFound, Product);
    } catch (error) {
      throw new Error(error);
    }
  }
}
