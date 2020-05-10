import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private readonly quizRepository: QuizRepository,
  ) {}

  async createQuiz() {
    throw new NotImplementedException();
  }

  async deleteQuiz() {
    throw new NotImplementedException();
  }

  async updateQuiz() {
    throw new NotImplementedException();
  }
}
