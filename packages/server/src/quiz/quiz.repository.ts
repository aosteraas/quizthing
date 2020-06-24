import { EntityRepository, Repository } from 'typeorm';
import { Quiz } from './quiz.entity';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { User } from '../auth/user.entity';

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz> {
  async createQuiz(createQuizDto: CreateQuizDto, user: User) {
    const quiz = new Quiz();
    quiz.title = createQuizDto.title;
    quiz.description = createQuizDto.description ?? '';
    quiz.user = user;

    await quiz.save();

    delete quiz.user;

    return quiz;
  }
}
