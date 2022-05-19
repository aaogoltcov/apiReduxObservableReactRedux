import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  isLoading: false,
  isError: false,
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    clearList: (state) => {
      state.list = [];
    },
    setListLoading: (state, action) => {
        state.isLoading = action.payload;
    },
    setListError: (state, action) => {
        state.isError = action.payload;
    }
  },
})

export const { setList, clearList, setListLoading, setListError } = listSlice.actions;
export default listSlice.reducer;