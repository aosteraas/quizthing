import {
  Injectable,
  NotImplementedException,
  NotFoundException,
} from '@nestjs/common';
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

  async deleteQuiz(id: number, user: User) {
    const removed = await this.quizRepository.delete({ id, userId: user.id });
    if (!removed.affected) {
      throw new NotFoundException();
    }
  }

  updateQuiz() {
    throw new NotImplementedException();
  }
}
