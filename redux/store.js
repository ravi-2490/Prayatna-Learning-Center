import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import advertisementSlice from "./slices/advertisementSlice";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  advertisement: advertisementSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
