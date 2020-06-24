import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { User } from '../auth/user.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private readonly quizRepository: QuizRepository,
  ) {}

  async createQuiz(createQuizDto: CreateQuizDto, user: User) {
    const quiz = await this.quizRepository.createQuiz(createQuizDto, user);
    return quiz;
  }

  deleteQuiz() {
    throw new NotImplementedException();
  }

  updateQuiz() {
    throw new NotImplementedException();
  }
}
