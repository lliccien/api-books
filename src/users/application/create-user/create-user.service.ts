import { MappersService } from '@Common/application/mappers.service';
import { EncryptedService } from '@Common/infrastructure/utils/encrypted/encrypted.service';
import { User } from '@Users/domain/user.domain';
import { UserRepository } from '@Users/domain/user.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: UserRepository,
    private readonly mappersService: MappersService,
    private readonly encryptedService: EncryptedService,
  ) {}

  async execute(user: User): Promise<User> {
    try {
      const passwordEncrypted = await this.encryptedService.encrypt(
        user.password,
      );

      user.password = passwordEncrypted;

      const newUser = await this.userRepository.createUser(user);

      delete newUser.password;

      return this.mappersService.entityToClass(newUser, User);
    } catch (error) {
      throw new Error(error);
    }
  }
}
