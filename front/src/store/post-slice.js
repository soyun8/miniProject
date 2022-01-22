import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    lists: [],
  },
  reducers: {
    replaceLists(state, action) {
      state.lists = action.payload;
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice;
