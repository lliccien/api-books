import { MappersService } from '@Common/application/mappers.service';
import { UserRepository } from '@Users/domain/user.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DeleteUserByIdService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: UserRepository,
    private readonly mappersService: MappersService,
  ) {}

  async execute(id: string): Promise<void> {
    try {
      const userFound = await this.userRepository.findUserById(id);
      if (!userFound) {
        throw new Error('User not found');
      }

      await this.userRepository.deleteUserById(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
