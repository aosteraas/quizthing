import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { GetUser } from '../auth/get-user-decorator';
import { User } from '../auth/user.entity';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createQuizDto: CreateQuizDto, @GetUser() user: User) {
    const quiz = await this.quizService.createQuiz();
    return quiz;
  }
}
