import { MappersService } from '@Common/application/mappers.service';
import { User } from '@Users/domain/user.domain';
import { UserRepository } from '@Users/domain/user.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: UserRepository,
    private readonly mappersService: MappersService,
  ) {}

  async execute(user: User): Promise<User> {
    try {
      const newUser = await this.userRepository.createUser(user);

      return this.mappersService.entityToClass(newUser, User);
    } catch (error) {
      throw new Error(error);
    }
  }
}
