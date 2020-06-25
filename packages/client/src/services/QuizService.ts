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

async function load() {
  const res = await api.get<Quiz[]>('/quiz');
  return res;
}

export const QuizService = {
  create,
  load,
};

export type { CreateQuizDto };
