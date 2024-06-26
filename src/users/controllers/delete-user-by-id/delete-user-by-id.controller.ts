import { DeleteUserByIdService } from '@Users/application/delete-user-by-id/delete-user-by-id.service';
import { Roles } from '@Users/decorators/roles/roles.decorator';
import { Role } from '@Users/domain/role.enum';
import { Controller, Delete, Param, ParseUUIDPipe, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('users')
export class DeleteUserByIdController {
  constructor(private readonly deleteUserByIdService: DeleteUserByIdService) {}

  @Roles(Role.ADMIN)
  @Delete(':id')
  async run(@Param('id', ParseUUIDPipe) id: string, @Res() res: Response) {
    this.deleteUserByIdService
      .execute(id)
      .then((result) => {
        res.status(204).json(result);
      })
      .catch((error) => {
        res.status(404).json({ message: error.message });
      });
  }
}
