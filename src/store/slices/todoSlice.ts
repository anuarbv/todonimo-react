import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { Item, ITodo, ITodoState } from 'types';

const initialState = {
  todos: []
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state: ITodoState, action: PayloadAction<ITodo>) => {
        state.todos.push(action.payload);
      },
      prepare: (title, listId) => {
        const id = nanoid();
        const completed = false;
        return {payload: {id, title, completed, listId}};
      }
    },
    removeTodo: (state: ITodoState, action: PayloadAction<Item>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state: ITodoState, action: PayloadAction<ITodo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      })
    } 
  }
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer