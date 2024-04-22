import { MappersService } from '@Common/application/mappers.service';
import { User } from '@Users/domain/user.domain';
import { UserRepository } from '@Users/domain/user.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindUserByIdService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: UserRepository,
    private readonly mappersService: MappersService,
  ) {}

  async execute(id: string): Promise<User> {
    try {
      const userFound = await this.userRepository.findUserById(id);
      if (!userFound) {
        throw new Error('User not found');
      }

      const user = await this.userRepository.findUserById(id);

      delete user.password;

      return this.mappersService.entityToClass(user, User);
    } catch (error) {
      throw new Error(error);
    }
  }
}
