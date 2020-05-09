import { Controller, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post('/')
  async create() {
    return await this.quizService.createQuiz();
  }
}
