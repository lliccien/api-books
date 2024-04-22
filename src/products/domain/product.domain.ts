import { User } from '@Users/domain/user.domain';

export class Product {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  cover?: string;
  attachments?: string[];
  owner?: User;
}
