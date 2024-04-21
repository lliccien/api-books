import { MappersService } from '@Common/application/mappers.service';
import { Product } from '@Products/domain/product';
import { ProductRepository } from '@Products/domain/product.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
    private readonly mappersService: MappersService,
  ) {}

  async execute(productDto: any): Promise<Product> {
    try {
      const newProduct = await this.productRepository.createProduct(productDto);
      return this.mappersService.entityToClass(newProduct, Product);
    } catch (error) {
      throw new Error(error);
    }
  }
}
