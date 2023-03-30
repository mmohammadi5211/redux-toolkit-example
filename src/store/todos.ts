import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  message: string;
  completed: boolean;
}

const todos = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: Math.random(),
        message: action.payload,
        completed: false,
      });
      return state;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    sort: (state) => {
      return state.sort((a, b) => a.message.localeCompare(b.message));
    },
  },
});

export const { addTodo, deleteTodo, sort } = todos.actions;

export default todos;
