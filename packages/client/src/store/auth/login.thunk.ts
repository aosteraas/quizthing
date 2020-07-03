import { AppThunk } from '..';
import { AuthActions, AuthStage } from './auth.slice';
import { AuthService, LoginData, storage, ApiClient } from '../../services';

export function login(data: LoginData): AppThunk {
  return async (dispatch) => {
    dispatch(AuthActions.setErrors([]));
    dispatch(AuthActions.setLoading(true));
    dispatch(AuthActions.setStage(AuthStage.LoggingIn));
    try {
      const res = await AuthService.login(data);
      dispatch(AuthActions.setTokens(res));
      dispatch(AuthActions.setStage(AuthStage.LoginSuccess));
      ApiClient.setAuthToken(res.accessToken);
      storage.saveToken(res.accessToken);
    } catch (err) {
      dispatch(AuthActions.setErrors(err));
      dispatch(AuthActions.setStage(AuthStage.LogInError));
    } finally {
      dispatch(AuthActions.setLoading(false));
    }
  };
}
