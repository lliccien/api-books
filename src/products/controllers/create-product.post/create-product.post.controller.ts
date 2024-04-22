import { CreateProductService } from '@Products/application/create-product/create-product.service';
import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product-dto';
import { Request, Response } from 'express';
import { PayloadToken } from '@Users/interfaces/payload-token';

@Controller('products')
export class CreateProductPostController {
  constructor(private readonly createProductService: CreateProductService) {}

  @Post()
  run(
    @Body() product: CreateProductDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const { sub: owner } = req?.user as PayloadToken;

    this.createProductService
      .execute(product, owner)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  }
}
