import type { AppThunk } from '..';
import { AuthService } from '../../services';
import { RegistrationActions } from './registration.slice';

export interface RegisterData {
  email: string;
  username: string;
  password: string;
}

export function register(data: RegisterData): AppThunk {
  return async (dispatch) => {
    dispatch(RegistrationActions.setErrors([]));
    dispatch(RegistrationActions.setLoading(true));
    try {
      await AuthService.register(data);
      dispatch(RegistrationActions.setSuccess(true));
    } catch (err) {
      console.log(err);
      dispatch(RegistrationActions.setErrors(err));
    } finally {
      dispatch(RegistrationActions.setLoading(false));
    }
  };
}
