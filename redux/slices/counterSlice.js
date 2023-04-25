import { createSlice } from "@reduxjs/toolkit";
const initialState = 10;
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, actions) {
      return state + 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice;
