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
  loading: boolean;
  success: boolean;
  errors: string[];
}

const initialState: AuthState = {
  stage: AuthStage.LoggedOut,
  accessToken: '',
  refreshToken: '',
  loading: false,
  success: false,
  errors: [],
};
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens(state, { payload }: PayloadAction<Tokens>) {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.success = true;
    },
    setErrors(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setStage(state, actiom: PayloadAction<AuthStage>) {
      state.stage = actiom.payload;
    },
    reset(state) {
      state = initialState;
    },
  },
});

const { actions, reducer } = slice;

export { actions as AuthActions, reducer as authReducer };
