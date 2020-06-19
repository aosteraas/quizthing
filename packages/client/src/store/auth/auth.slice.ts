import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
export enum AuthStage {
  LoggedOut,
  LoggingIn,
  LogInError,
  LoginSuccess,
}

interface AuthState {
  accessToken: string;
  refreshToken: string;
  stage: AuthStage;
}

const initialState: AuthState = {
  stage: AuthStage.LoggedOut,
  accessToken: '',
  refreshToken: '',
};
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<Tokens>) {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
    setStage(state, actiom: PayloadAction<AuthStage>) {
      state.stage = actiom.payload;
    },
  },
});

const { actions, reducer } = slice;

export { actions as AuthActions, reducer as authReducer };
