import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from 'axios'

// Reducer Thunk
export const getAlltodos = createAsyncThunk('todos/todone', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
  return response.data
})

export const addTodo = createAsyncThunk('todos/TodosAdd', async title => {
  const newTodo = {
    id: nanoid(),
    title,
    completed: false
  }
  await axios.post('https://jsonplaceholder.typicode.com/todos/', newTodo)
  return newTodo
})

export const deleteTodo = createAsyncThunk('todos/TodoDelete', async todoID => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoID}`)
  return todoID
})


const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    allTodos: []
  },
  reducers: {
    changeStt(state, action) {
      const todoID = action.payload
      state.allTodos = state.allTodos.map(todo => {
        if (todo.id === todoID) todo.completed = !todo.completed
        return todo
      })
    },
  },

  extraReducers: {
    // Get all Todos
    [getAlltodos.pending]: (state, action) => {
      console.log('loading');
    },
    [getAlltodos.fulfilled]: (state, action) => {
      console.log('ok');
      state.allTodos = action.payload
    },
    [getAlltodos.rejected]: (state, action) => {
      console.log('fail to get :"<')
    },

    // Add Todos
    [addTodo.fulfilled]: (state, action) => {
      state.allTodos.unshift(action.payload)
    },

    // Delete Todos
    [deleteTodo.fulfilled]: (state, action) => {
      // const todoID = action.payload
      state.allTodos = state.allTodos.filter(todo => todo.id !== action.payload)
    },
  }
})

// Reducer
const todosReducer = todosSlice.reducer

// Selector
export const todoSelector = state => state.todosReducer.allTodos

// Export

export const { changeStt } = todosSlice.actions

export default todosReducer