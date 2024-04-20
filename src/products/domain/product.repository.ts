import { Product } from './product';

export interface ProductRepository {
  createProduct(product: Product): Promise<Product>;
  findAllProducts(): Promise<Product[]>;
  findProductById(id: string): Promise<Product>;
  updateProductById(id: string, product: Product): Promise<Product>;
  deleteProductById(id: string): Promise<void>;
}
