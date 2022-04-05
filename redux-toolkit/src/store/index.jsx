import { createSlice, configureStore } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    allTodos: [
      {
        id: 1,
        title: 'First job',
        status: false
      },
      {
        id: 2,
        title: 'Second job',
        status: false
      },
      {
        id: 3,
        title: 'Third job',
        status: true
      }
    ]
  }
})

// Reducer
const todoReducer = todoSlice.reducer

// Store
export const store = configureStore({
  reducer: { todoReducer }
})

// Selector
export const todoSelector = state => state.todoReducer.allTodos

// Export
// export default store