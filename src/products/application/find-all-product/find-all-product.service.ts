import { MappersService } from '@Common/application/mappers.service';
import { Product } from '@Products/domain/product.domain';
import { ProductRepository } from '@Products/domain/product.repository';
import { FindUserByIdService } from '@Users/application/find-user-by-id/find-user-by-id.service';
import { UserEntity } from '@Users/infrastructure/persistence/entities/user.entity';
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
    console.log(`owner: ${owner}, role: ${role}`);

    try {
      if (role === 'admin') {
        const products = await this.productRepository.findAllProducts();
        return products.map((product) =>
          this.mappersService.entityToClass(product, Product),
        );
      }
      // const user = await this.findUserByIdService.execute(owner);
      // const userE = this.mappersService.classToEntity(user, UserEntity);
      const products = await this.productRepository.findAllProducts(owner);
      console.log(`products: ${products}`);

      return products.map((product) =>
        this.mappersService.entityToClass(product, Product),
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
