import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todosSlice";

// Store
export const store = configureStore({
  reducer: {
    todosReducer
  }
})