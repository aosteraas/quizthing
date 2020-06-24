import { Test, TestingModule } from '@nestjs/testing';
import { QuizService } from './quiz.service';
import { QuizRepository } from './quiz.repository';
import { User } from '../auth/user.entity';
import { Quiz } from './quiz.entity';

const mockQuizRepository = () => ({
  //
});

describe('QuizService', () => {
  let service: QuizService;
  const mockUser = {
    id: 1,
    username: 'testuser',
    email: 'fake@email.com',
    password: 'fake password',
    salt: 'some salt',
  } as User;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuizService,
        { provide: QuizRepository, useFactory: mockQuizRepository },
      ],
    }).compile();

    service = module.get<QuizService>(QuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('createQuiz returns a nrew quiz without the user', async () => {
    const createQuizDto = { title: 'some quiz' };
    const quiz = await service.createQuiz(createQuizDto, mockUser);
    expect(quiz).toBeInstanceOf(Quiz);
    expect(quiz).toMatchInlineSnapshot();
  });
  it('deleteQuiz', () => {
    expect(() => service.deleteQuiz()).toThrow();
  });
  it('updateQuiz', () => {
    expect(() => service.updateQuiz()).toThrow();
  });
});
