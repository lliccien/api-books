import { DeleteProductByIdService } from '@Products/application/delete-product-by-id/delete-product-by-id.service';
import { Controller, Delete, Param, ParseUUIDPipe, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class DeleteProductByIdDeleteController {
  constructor(
    private readonly deleteProductByIdService: DeleteProductByIdService,
  ) {}

  @Delete(':id')
  run(@Param('id', ParseUUIDPipe) id: string, @Res() res: Response) {
    this.deleteProductByIdService
      .execute(id)
      .then(() => {
        res.status(204).json();
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  }
}
