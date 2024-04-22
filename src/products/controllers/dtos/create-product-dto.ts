import { User } from '@Users/domain/user.domain';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  cover: string;

  @IsOptional()
  @IsString({ each: true })
  @IsNotEmpty()
  attachments: string[];

  @IsOptional()
  owner: User;
}
