import { CreateUserService } from '@Users/application/create-user/create-user.service';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from '../dtos/create-user.dto';
import { Role } from '@Users/domain/role.enum';
import { Roles } from '@Users/decorators/roles/roles.decorator';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Roles(Role.ADMIN)
  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  run(@Body() user: CreateUserDto, @Res() res: Response) {
    this.createUserService
      .execute(user)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((error) => {
        res.status(404).json({ message: error.message });
      });
  }
}
