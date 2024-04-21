import { CreateUserService } from '@Users/application/create-user/create-user.service';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
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
