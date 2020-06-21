import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { TokenDto } from './dto/Token.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return await this.authService.signUp(authCredentialsDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body(ValidationPipe) loginDto: LoginDto): Promise<TokenDto> {
    return this.authService.signIn(loginDto);
  }
}
