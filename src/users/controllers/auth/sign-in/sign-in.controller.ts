import { SignInService } from '@Users/application/auth/sign-in/sign-in.service';
import { SignInDto } from '@Users/controllers/dtos/auth/sign-in.dto';
import { Public } from '@Users/decorators/public/public.decorator';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Public()
  @Post('sign-in')
  signIn(@Body() user: SignInDto, @Res() res: Response) {
    this.signInService
      .execute(user)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  }
}
