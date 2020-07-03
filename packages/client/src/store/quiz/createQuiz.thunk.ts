import { QuizActions } from './quiz.slice';
import { QuizService } from '../../services';
import { AppThunk } from '..';
import type { CreateQuizDto } from '@quizthing/common';

export function createQuiz(data: CreateQuizDto): AppThunk {
  return async (dispatch) => {
    dispatch(QuizActions.create());
    try {
      const payload = await QuizService.create(data);
      dispatch(QuizActions.created(payload));
    } catch (e) {
      dispatch(QuizActions.createFailed(e));
    }
  };
}
