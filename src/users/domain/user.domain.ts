import { Product } from '@Products/domain/product.domain';

export class User {
  id?: string;
  fullName?: string;
  email?: string;
  password?: string;
  role?: string;
  products?: Product[];
}
