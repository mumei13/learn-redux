import { createSlice, nanoid } from "@reduxjs/toolkit";
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    allTodos: [
      {
        id: 1,
        title: 'First job',
        completed: false
      },
      {
        id: 2,
        title: 'Second job',
        completed: false
      },
      {
        id: 3,
        title: 'Third job',
        completed: true
      }
    ]
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.allTodos.unshift(action.payload)
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false
          }
        }
      }
    },
    changeStt(state, action) {
      const todoID = action.payload
      state.allTodos = state.allTodos.map(todo => {
        if (todo.id === todoID) todo.completed = !todo.completed
        return todo
      })
    },
    deleteTodo(state, action) {
      const todoID = action.payload
      state.allTodos = state.allTodos.filter(todo => todo.id !== action.payload)
    }
  }
})

// Reducer
const todosReducer = todosSlice.reducer

// Selector
export const todoSelector = state => state.todosReducer.allTodos

// Export

export const { addTodo, changeStt, deleteTodo } = todosSlice.actions

export default todosReducer