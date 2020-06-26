import { Test, TestingModule } from '@nestjs/testing';
import { QuizService } from './quiz.service';
import { QuizRepository } from './quiz.repository';
import { User } from '../auth/user.entity';
import { Quiz } from './quiz.entity';
import { NotFoundException } from '@nestjs/common';

const mockQuizRepository = () => ({
  createQuiz: jest.fn(),
  delete: jest.fn(),
});

describe('QuizService', () => {
  let service: QuizService;
  let repository;
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
    repository = module.get<QuizRepository>(QuizRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('createQuiz returns a new quiz without the user', async () => {
    const createQuizDto = { title: 'some quiz', desc: 'something' };
    const quizEntity = {
      ...createQuizDto,
      id: 1,
      created: new Date('2020-06-24T09:42:28.004Z'),
      questions: [],
      userId: mockUser.id,
    };
    repository.createQuiz.mockResolvedValue(quizEntity);
    const quiz = await service.createQuiz(createQuizDto, mockUser);

    expect(quiz).toMatchSnapshot();
    expect(quiz.user).toBeUndefined();
  });
  it('deleteQuiz throws not found exception when matching quiz not found', async () => {
    repository.delete.mockResolvedValue({ affected: 0 });
    expect(service.deleteQuiz(1, mockUser)).rejects.toThrow(NotFoundException);
  });
  it('deleteQuiz returns void when deleting a quiz successfully', async () => {
    repository.delete.mockResolvedValue({ affected: 1 });
    expect(service.deleteQuiz(1, mockUser)).resolves.toBeUndefined();
  });
  it('updateQuiz', () => {
    expect(() => service.updateQuiz()).toThrow();
  });
});
