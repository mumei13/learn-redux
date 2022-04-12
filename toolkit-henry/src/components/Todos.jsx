import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoSelector } from '../store/reducers/Todos/todosSlice'
import TodoForm from './TodoForm'
import { changeStt, deleteTodo, getAlltodos } from '../store/reducers/Todos/todosSlice'

const Todos = () => {
  const todos = useSelector(todoSelector)
  const dispatch = useDispatch()
  const changeStatusTodo = todoID => {
    dispatch(changeStt(todoID))
  }

  const delTodo = todoID => {
    dispatch(deleteTodo(todoID))
  }
  useEffect(() => {
    dispatch(getAlltodos())
  }, [dispatch])

  return (
    <div className='todo-list'>
      <TodoForm />
      <ul>
        {todos.map(todo =>
          <li key={todo.id} className={todo.completed ? 'done' : ''}>
            {todo.title}
            <input type="checkbox" defaultChecked={todo.completed} onChange={changeStatusTodo.bind(this, todo.id)} />
            <button onClick={delTodo.bind(this, todo.id)}>Delete</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Todos