import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infrastructure/persistence/entities/user.entity';
import { CreateUserService } from './application/create-user/create-user.service';
import { FindAllUsersService } from './application/find-all-users/find-all-users.service';
import { FindUserByIdService } from './application/find-user-by-id/find-user-by-id.service';
import { FindUserByEmailService } from './application/find-user-by-email/find-user-by-email.service';
import { UpdateUserByIdService } from './application/update-user-by-id/update-user-by-id.service';
import { DeleteUserByIdService } from './application/delete-user-by-id/delete-user-by-id.service';
import { UserTypeormRepository } from './infrastructure/persistence/user.typeorm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [],
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserTypeormRepository,
    },
    UserTypeormRepository,
    CreateUserService,
    FindAllUsersService,
    FindUserByIdService,
    FindUserByEmailService,
    UpdateUserByIdService,
    DeleteUserByIdService,
  ],
  exports: [],
})
export class UsersModule {}
