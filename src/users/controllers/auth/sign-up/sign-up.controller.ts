import { SignUpService } from '@Users/application/auth/sign-up/sign-up.service';
import { SignUpDto } from '@Users/controllers/dtos/auth/sign-up.tod';
import { Public } from '@Users/decorators/public/public.decorator';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Public()
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto, @Res() res: Response) {
    this.signUpService
      .execute(signUpDto)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  }
}
