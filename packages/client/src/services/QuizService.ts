import { ApiClient } from './api';
import { Quiz } from '../store/quiz';

interface CreateQuizDto {
  title: string;
  description?: string;
}

async function create(data: CreateQuizDto) {
  const res = await ApiClient.post<Quiz>('/quiz', data);
  return res;
}

async function load() {
  const res = await ApiClient.get<Quiz[]>('/quiz');
  return res;
}

export const QuizService = {
  create,
  load,
};

export type { CreateQuizDto };
