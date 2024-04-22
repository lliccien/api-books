import { EncryptedService } from '@Common/infrastructure/utils/encrypted/encrypted.service';
import { SignInDto } from '@Users/controllers/dtos/auth/sign-in.dto';
import { UserRepository } from '@Users/domain/user.repository';
import { TokenService } from '@Users/infrastructure/auth/token/token.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SignInService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService,
    private readonly encryptedService: EncryptedService,
  ) {}

  async execute(user: SignInDto): Promise<object> {
    const { email, password } = user;
    const userFound = await this.userRepository.findUserByEmail(email);
    if (!userFound) {
      throw new Error('User not found');
    }

    const passwordMatch = await this.encryptedService.compare(
      password,
      userFound.password,
    );
    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    const payload = {
      sub: userFound.id,
      fullName: userFound.fullName,
      role: userFound.role,
    };

    const token = await this.tokenService.generateToken(payload);
    return { token };
  }
}
