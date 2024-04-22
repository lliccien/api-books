import { MappersService } from '@Common/application/mappers.service';
import { EncryptedService } from '@Common/infrastructure/utils/encrypted/encrypted.service';
import { SignUpDto } from '@Users/controllers/dtos/auth/sign-up.tod';
import { User } from '@Users/domain/user.domain';
import { UserRepository } from '@Users/domain/user.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SignUpService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: UserRepository,
    private readonly encryptedService: EncryptedService,
    private readonly mappersService: MappersService,
  ) {}

  async execute(user: SignUpDto): Promise<User> {
    try {
      const passwordEncrypted = await this.encryptedService.encrypt(
        user.password,
      );

      user.password = passwordEncrypted;

      const userCreate = await this.userRepository.createUser(user);

      delete userCreate.password;

      return this.mappersService.entityToClass(userCreate, User);
    } catch (error) {
      throw new Error(error);
    }
  }
}
