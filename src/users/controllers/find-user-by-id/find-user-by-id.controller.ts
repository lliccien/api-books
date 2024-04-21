import { FindUserByIdService } from '@Users/application/find-user-by-id/find-user-by-id.service';
import { Controller, Get, Param, ParseUUIDPipe, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('users')
export class FindUserByIdController {
  constructor(private readonly findUserByIdService: FindUserByIdService) {}

  @Get(':id')
  async run(@Param('id', ParseUUIDPipe) id: string, @Res() res: Response) {
    this.findUserByIdService
      .execute(id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(404).json({ message: error.message });
      });
  }
}
