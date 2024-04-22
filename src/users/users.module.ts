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
import { CreateUserController } from './controllers/create-user/create-user.controller';
import { FindAllUserController } from './controllers/find-all-user/find-all-user.controller';
import { FindUserByIdController } from './controllers/find-user-by-id/find-user-by-id.controller';
import { UpdateUserByIdController } from './controllers/update-user-by-id/update-user-by-id.controller';
import { DeleteUserByIdController } from './controllers/delete-user-by-id/delete-user-by-id.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@Config/config.module';
import { ConfigService } from '@Config/services/config.service';
import { TokenService } from './infrastructure/auth/token/token.service';
import { SignInController } from './controllers/auth/sign-in/sign-in.controller';
import { SignUpController } from './controllers/auth/sign-up/sign-up.controller';
import { SignUpService } from './application/auth/sign-up/sign-up.service';
import { SignInService } from './application/auth/sign-in/sign-in.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { RolesGuard } from './guards/roles/roles.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('JWT_EXPIRES_IN') },
        global: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [
    CreateUserController,
    FindAllUserController,
    FindUserByIdController,
    UpdateUserByIdController,
    DeleteUserByIdController,
    SignInController,
    SignUpController,
  ],
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
    TokenService,
    SignUpService,
    SignInService,
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
    {
      provide: 'APP_GUARD',
      useClass: RolesGuard,
    },
  ],
  exports: [FindUserByIdService],
})
export class UsersModule {}
