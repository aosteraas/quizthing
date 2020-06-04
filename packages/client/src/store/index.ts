import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { registrationReducer } from './registration';

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
