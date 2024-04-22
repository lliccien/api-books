import { User } from '@Users/domain/user.domain';
import { Product } from './product.domain';

export interface ProductRepository {
  createProduct(product: Product): Promise<Product>;
  findAllProducts(owner?: string): Promise<Product[]>;
  findProductById(id: string): Promise<Product>;
  updateProductById(id: string, product: Product): Promise<Product>;
  deleteProductById(id: string): Promise<void>;
}
