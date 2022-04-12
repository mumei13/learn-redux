import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/Todos/todosSlice";

// Store
export const store = configureStore({
  reducer: {
    todosReducer
  }
})