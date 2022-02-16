import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import listSlice from './slices/listSlice';
import todoSlice from './slices/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    lists: listSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
