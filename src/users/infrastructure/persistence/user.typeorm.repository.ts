import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from '@Users/domain/user.repository';
import { User } from '@Users/domain/user.domain';
import { InjectRepository } from '@nestjs/typeorm';

export class UserTypeormRepository
  extends Repository<UserEntity>
  implements UserRepository
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  async createUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findUserById(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async updateUserById(id: string, user: User): Promise<User> {
    await this.userRepository.save({ id, ...user });

    return this.findUserById(id);
  }

  async deleteUserById(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
