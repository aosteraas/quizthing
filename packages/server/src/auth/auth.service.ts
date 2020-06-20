import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const username = await this.userRepository.validateUserPassword(loginDto);

    if (!username) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const accessToken = await this.jwtService.signAsync({ username });
    return { accessToken };
  }
}
