import { AppThunk } from '../index';
import { QuizActions } from './quiz.slice';
import { QuizService } from '../../services';

export function loadQuizzes(): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(QuizActions.load(true));
      const res = await QuizService.load();
      dispatch(QuizActions.loaded(res));
    } catch (e) {
      console.error(e);
      dispatch(QuizActions.load(false));
    }
  };
}
