import { UpdateProductByIdService } from '@Products/application/update-product-by-id/update-product-by-id.service';
import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Patch,
  Res,
} from '@nestjs/common';
import { UpdateProductDto } from '../dtos/update-product-dto';
import { Response } from 'express';

@Controller('products')
export class UpdateProductByIdPatchController {
  constructor(
    private readonly updateProductByIdService: UpdateProductByIdService,
  ) {}

  @Patch(':id')
  run(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: UpdateProductDto,
    @Res() res: Response,
  ) {
    this.updateProductByIdService
      .execute(id, product)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  }
}
