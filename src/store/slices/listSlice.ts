import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { IList, IListState, Item } from 'types';

const initialState: IListState = {
  lists: [{id: nanoid(), title: 'To-do'}],
}

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: {
      reducer: (state: IListState, action: PayloadAction<IList>) => {
        state.lists.push(action.payload);
      },
      prepare: (title = "List") => {
        const id = nanoid();
        return {payload: {id, title}}
      }
    },
    removeList: (state: IListState, action: PayloadAction<Item>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload.id);
    }
  }
});

export const {addList} = listSlice.actions

export default listSlice.reducer