import { MappersService } from '@Common/application/mappers.service';
import { Product } from '@Products/domain/product.domain';
import { ProductRepository } from '@Products/domain/product.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindAllProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
    private readonly mappersService: MappersService,
  ) {}

  async execute(): Promise<Product[]> {
    try {
      const products = await this.productRepository.findAllProducts();
      return products.map((product) =>
        this.mappersService.entityToClass(product, Product),
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
