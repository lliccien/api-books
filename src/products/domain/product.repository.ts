import { Product } from './product';

export interface ProductRepository {
  createProduct(product: Product): Promise<Product>;
  findAllProducts(): Promise<Product[]>;
  findProductById(id: string): Promise<Product>;
  updateProduct(id: string, product: Product): Promise<Product>;
  deleteProduct(id: string): Promise<void>;
}
