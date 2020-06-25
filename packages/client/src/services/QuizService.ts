import { ApiClient } from './api';
import { Quiz } from '../store/quiz';

const api = new ApiClient();
interface CreateQuizDto {
  title: string;
  description?: string;
}

async function create(data: CreateQuizDto) {
  const res = await api.post<Quiz>('/quiz', data);
  return res;
}

export const QuizService = {
  create,
};

export type { CreateQuizDto };
