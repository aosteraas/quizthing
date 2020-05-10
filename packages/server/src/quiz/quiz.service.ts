import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private readonly quizRepository: QuizRepository,
  ) {}

  createQuiz() {
    throw new NotImplementedException();
  }

  deleteQuiz() {
    throw new NotImplementedException();
  }

  updateQuiz() {
    throw new NotImplementedException();
  }
}
