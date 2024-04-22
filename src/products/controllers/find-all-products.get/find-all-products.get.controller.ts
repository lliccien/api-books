import { FindAllProductService } from '@Products/application/find-all-product/find-all-product.service';
import { PayloadToken } from '@Users/interfaces/payload-token';
import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('products')
export class FindAllProductsGetController {
  constructor(private readonly findAllProductService: FindAllProductService) {}

  @Get()
  run(@Res() res: Response, @Req() req: Request) {
    const { sub: owner, role } = req?.user as PayloadToken;
    this.findAllProductService
      .execute(owner, role)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  }
}
