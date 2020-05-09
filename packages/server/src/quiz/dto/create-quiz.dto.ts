import { IsNotEmpty } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty()
  title: string;
}
