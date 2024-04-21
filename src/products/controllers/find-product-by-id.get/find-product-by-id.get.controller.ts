import { FindProductByIdService } from '@Products/application/find-product-by-id/find-product-by-id.service';
import { Controller, Get, Param, ParseUUIDPipe, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class FindProductByIdGetController {
  constructor(
    private readonly findProductByIdService: FindProductByIdService,
  ) {}

  @Get(':id')
  run(@Param('id', ParseUUIDPipe) id: string, @Res() res: Response) {
    this.findProductByIdService
      .execute(id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  }
}
