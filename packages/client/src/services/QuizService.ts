import type { CreateQuizDto } from '@quizthing/common';
import { ApiClient } from './api';
import { Quiz } from '../store/quiz';

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
