import { FindAllUsersService } from '@Users/application/find-all-users/find-all-users.service';
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('users')
export class FindAllUserController {
  constructor(private readonly findAllUsersService: FindAllUsersService) {}

  @Get()
  async run(@Res() res: Response) {
    this.findAllUsersService
      .execute()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(404).json({ message: error.message });
      });
  }
}
