import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
  quizzes: Array<Quiz>;
  loading: boolean;
  errors: string[];
}

interface Quiz {
  id: number;
  title: string;
  description: string;
  created: Date;
}

const initialState: QuizState = {
  quizzes: [],
  loading: false,
  errors: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    create(state) {
      state.loading = true;
    },
    created(state, action: PayloadAction<Quiz>) {
      state.loading = false;
      state.quizzes.unshift(action.payload);
    },
    createFailed(state, action: PayloadAction<string[]>) {
      state.loading = false;
      state.errors = action.payload;
    },
    load(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    loaded(state, action: PayloadAction<Array<Quiz>>) {
      state.loading = false;
      state.quizzes = action.payload;
    },
  },
});

const { actions, reducer } = quizSlice;

export { actions as QuizActions, reducer as quizReducer };
export type { QuizState, Quiz };
