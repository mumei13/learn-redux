import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/reducers/Todos/todosSlice'

const TodoForm = () => {

  const [title, setTitle] = useState('')

  const changeTitle = e => {
    setTitle(e.target.value)
  }

  const dispatch = useDispatch()

  const addOneTodo = e => {
    e.preventDefault()
    dispatch(addTodo(title))
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={addOneTodo}>
        <input type="text" value={title} onChange={changeTitle} />
        <input type='submit' value='Add' />
      </form>
    </div>
  )
}

export default TodoForm