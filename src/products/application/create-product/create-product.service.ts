import { MappersService } from '@Common/application/mappers.service';
import { Product } from '@Products/domain/product.domain';
import { ProductRepository } from '@Products/domain/product.repository';
import { FindUserByIdService } from '@Users/application/find-user-by-id/find-user-by-id.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
    private readonly mappersService: MappersService,
    private readonly findUserByIdService: FindUserByIdService,
  ) {}

  async execute(product: Product, owner: string): Promise<Product> {
    try {
      const user = await this.findUserByIdService.execute(owner);
      product.owner = user;
      const newProduct = await this.productRepository.createProduct(product);
      return this.mappersService.entityToClass(newProduct, Product);
    } catch (error) {
      throw new Error(error);
    }
  }
}
