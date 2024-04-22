import { MappersService } from '@Common/application/mappers.service';
import { User } from '@Users/domain/user.domain';
import { UserRepository } from '@Users/domain/user.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindAllUsersService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: UserRepository,
    private readonly mappersService: MappersService,
  ) {}

  async execute(): Promise<User[]> {
    try {
      const users = await this.userRepository.findAllUsers();

      return users.map((user) => {
        delete user.password;
        return this.mappersService.entityToClass(user, User);
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
