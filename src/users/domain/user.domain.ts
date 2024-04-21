import { Role } from './role.enum';

export class User {
  id?: string;
  fullName?: string;
  email?: string;
  password?: string;
  role?: Role;
}
