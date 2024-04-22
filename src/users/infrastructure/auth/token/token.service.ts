import { ConfigService } from '@Config/services/config.service';
import { PayloadToken } from '@Users/interfaces/payload-token';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateToken(payload: PayloadToken): Promise<string> {
    return this.jwtService.signAsync(payload);
  }

  async verifyToken(token: string): Promise<PayloadToken> {
    const secret = this.configService.get('JWT_SECRET');
    return this.jwtService.verifyAsync<PayloadToken>(token, {
      secret,
    });
  }
}
