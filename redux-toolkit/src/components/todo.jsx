import React from 'react'
import { useSelector } from 'react-redux'
import { todoSelector } from '../store'

export const Todos = () => {
  const todos = useSelector(todoSelector)
  return (
    <div className='list-todo'>
      <ul >
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

    </div>
  )
}
