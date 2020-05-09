import { EntityRepository, Repository } from 'typeorm';
import { Quiz } from './quiz.entity';
import { CreateQuizDto } from './dto/create-quiz.dto';

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz> {
  createQuiz = async (createQuizDto: CreateQuizDto) => {
    const quiz = new Quiz();
    quiz.title = createQuizDto.title;

    await quiz.save();

    return quiz;
  };
}
