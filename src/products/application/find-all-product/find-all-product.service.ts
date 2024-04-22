import { MappersService } from '@Common/application/mappers.service';
import { Product } from '@Products/domain/product.domain';
import { ProductRepository } from '@Products/domain/product.repository';
import { FindUserByIdService } from '@Users/application/find-user-by-id/find-user-by-id.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindAllProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
    private readonly mappersService: MappersService,
    private readonly findUserByIdService: FindUserByIdService,
  ) {}

  async execute(owner: string, role: string): Promise<Product[]> {
    try {
      if (role === 'admin') {
        const products = await this.productRepository.findAllProducts();
        return products.map((product) =>
          this.mappersService.entityToClass(product, Product),
        );
      }

      const products = await this.productRepository.findAllProducts(owner);

      return products.map((product) =>
        this.mappersService.entityToClass(product, Product),
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
