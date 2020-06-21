import { Injectable, BadRequestException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { TokenDto } from './dto/Token.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(loginDto: LoginDto): Promise<TokenDto> {
    const username = await this.userRepository.validateUserPassword(loginDto);

    if (!username) {
      throw new BadRequestException(['Invalid Credentials']);
    }

    const accessToken = await this.jwtService.signAsync({ username });
    return new TokenDto(accessToken, 'TODO');
  }
}
