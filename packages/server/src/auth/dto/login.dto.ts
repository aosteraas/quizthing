import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Username or Email is required' })
  user: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
