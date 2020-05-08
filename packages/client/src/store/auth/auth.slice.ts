import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface AuthState {
  accessToken: string;
  refreshToken: string;
}

const initialState: AuthState = {
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
  },
});

const { actions, reducer } = slice;

export { actions as AuthActions, reducer as authReducer };
