import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { ProductRepository } from '@Products/domain/product.repository';
import { Product } from '@Products/domain/product';
import { InjectRepository } from '@nestjs/typeorm';

export class ProductTypeormRepository
  extends Repository<ProductEntity>
  implements ProductRepository
{
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {
    super(
      productRepository.target,
      productRepository.manager,
      productRepository.queryRunner,
    );
  }

  async createProduct(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }

  async findAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findProductById(id: string): Promise<Product> {
    return await this.productRepository.findOne({ where: { id } });
  }

  async updateProductById(id: string, product: Product): Promise<Product> {
    await this.productRepository.save({ id, ...product });

    return this.findProductById(id);
  }
  async deleteProductById(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
