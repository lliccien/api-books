import { CreateProductService } from '@Products/application/create-product/create-product.service';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product-dto';
import { Response } from 'express';

@Controller('products')
export class CreateProductPostController {
  constructor(private readonly createProductService: CreateProductService) {}

  @Post()
  run(@Body() product: CreateProductDto, @Res() res: Response) {
    this.createProductService
      .execute(product)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  }
}
