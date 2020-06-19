import { AppThunk } from '..';
import { AuthActions, Tokens, AuthStage } from './auth.slice';
import { ApiClient, LoginData } from '../../services';

export function login(data: LoginData): AppThunk {
  return async (dispatch) => {
    dispatch(AuthActions.setStage(AuthStage.LoggingIn));
    try {
      const api = new ApiClient();
      const res = await api.post<Tokens>('', data);
      dispatch(AuthActions.setTokens(res));
      dispatch(AuthActions.setStage(AuthStage.LoginSuccess));
    } catch {
      dispatch(AuthActions.setStage(AuthStage.LogInError));
    }
  };
}
