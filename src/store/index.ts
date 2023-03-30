import { configureStore } from '@reduxjs/toolkit';
import todos from './todos';
import { type } from 'os';

export const store = configureStore({
  reducer: { todos: todos.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
