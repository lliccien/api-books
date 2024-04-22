import { UpdateUserByIdService } from '@Users/application/update-user-by-id/update-user-by-id.service';
import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Patch,
  Res,
} from '@nestjs/common';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { Response } from 'express';
import { Roles } from '@Users/decorators/roles/roles.decorator';
import { Role } from '@Users/domain/role.enum';

@Controller('users')
export class UpdateUserByIdController {
  constructor(private readonly updateUserById: UpdateUserByIdService) {}

  @Roles(Role.ADMIN)
  @Patch(':id')
  async run(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() user: UpdateUserDto,
    @Res() res: Response,
  ) {
    this.updateUserById
      .execute(id, user)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(404).json({ message: error.message });
      });
  }
}
