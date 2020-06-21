import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
  loading: boolean;
  success: boolean;
  errors: string[];
}

const initialState: RegistrationState = {
  loading: false,
  errors: [],
  success: false,
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
    setSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload;
    },
    reset(state) {
      state.errors = [];
      state.loading = false;
      state.success = false;
    },
  },
});

const { actions, reducer } = slice;

export { actions as RegistrationActions, reducer as registrationReducer };
