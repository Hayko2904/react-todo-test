import { configureStore } from '@reduxjs/toolkit';
import {todoReducer} from "../features/todo/todoAction";

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
});
