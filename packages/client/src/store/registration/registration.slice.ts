import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
  loading: boolean;
  errors: string[];
}

const initialState: RegistrationState = {
  loading: false,
  errors: [],
};

const slice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setErrors(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
    },
  },
});

const { actions, reducer } = slice;

export { actions as RegistrationActions, reducer as registrationReducer };
