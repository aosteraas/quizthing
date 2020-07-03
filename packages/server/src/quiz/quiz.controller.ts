import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { GetUser } from '../auth/get-user-decorator';
import { User } from '../auth/user.entity';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('quiz')
@UseGuards(AuthGuard())
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createQuizDto: CreateQuizDto, @GetUser() user: User) {
    const quiz = await this.quizService.createQuiz(createQuizDto, user);
    return quiz;
  }

  @Get()
  async quizzes(@GetUser() user: User) {
    return await this.quizService.getQuizzez(user);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteQuiz(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ) {
    return await this.quizService.deleteQuiz(id, user);
  }
}
