import { User } from './user.domain';

export interface UserRepository {
  createUser(user: User): Promise<User>;
  findAllUsers(): Promise<User[]>;
  findUserById(id: string): Promise<User>;
  findUserByEmail(email: string): Promise<User>;
  updateUserById(id: string, user: User): Promise<User>;
  deleteUserById(id: string): Promise<void>;
}
