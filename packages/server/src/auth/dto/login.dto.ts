import { IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  user: string;

  @Length(6, 25)
  password: string;
}
