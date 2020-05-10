import { Test, TestingModule } from '@nestjs/testing';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizService],
    }).compile();

    service = module.get<QuizService>(QuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('createQuiz', () => {
    expect(service.createQuiz()).toThrow();
  });
  it('deleteQuiz', () => {
    expect(service.deleteQuiz()).toThrow();
  });
  it('updateQuiz', () => {
    expect(service.updateQuiz()).toThrow();
  });
});
