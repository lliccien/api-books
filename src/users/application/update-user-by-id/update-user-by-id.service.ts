import { MappersService } from '@Common/application/mappers.service';
import { User } from '@Users/domain/user.domain';
import { UserRepository } from '@Users/domain/user.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateUserByIdService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: UserRepository,
    private readonly mappersService: MappersService,
  ) {}

  async execute(id: string, user: any): Promise<User> {
    try {
      const userFound = await this.userRepository.findUserById(id);
      if (!userFound) {
        throw new Error('User not found');
      }

      if (Object.keys(user).length === 0) {
        throw new Error('User data is required');
      }

      const updateUser = await this.userRepository.updateUserById(id, user);

      return this.mappersService.entityToClass(updateUser, User);
    } catch (error) {
      throw new Error(error);
    }
  }
}
