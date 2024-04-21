import { FindAllProductService } from '@Products/application/find-all-product/find-all-product.service';
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class FindAllProductsGetController {
  constructor(private readonly findAllProductService: FindAllProductService) {}

  @Get()
  run(@Res() res: Response) {
    this.findAllProductService
      .execute()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  }
}
