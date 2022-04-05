import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTodos, markComplete, deleteTodo } from '../store/actions/actions'

const Todos = ({ todos, getTodos, markComplete, deleteTodo }) => {
  useEffect(() => {
    getTodos()
  }, [getTodos])

  return (
    <div className='todo-list'>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.title}
            <input type='checkbox' onClick={markComplete.bind(this, todo.id)} defaultChecked={todo.completed ? true : false} />
            <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

Todos.propTypes = {
  getTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.myTodos.todos
})

export default connect(mapStateToProps, { getTodos, markComplete, deleteTodo })(Todos)