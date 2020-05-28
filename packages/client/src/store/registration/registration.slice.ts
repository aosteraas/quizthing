import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface RegistrationState {
  accessToken: string;
  refreshToken: string;
}

const initialState: RegistrationState = {
  accessToken: '',
  refreshToken: '',
};

const slice = createSlice({
  name: 'registration',
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

export { actions as RegistrationActions, reducer as registrationReducer };
