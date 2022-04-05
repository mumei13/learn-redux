import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions/actions'

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('')
  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onSubmitForm = e => {
    e.preventDefault()

    if (title !== '') {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false
      }
      addTodo(newTodo)
      setTitle('')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type='text' name='title' onChange={onChangeTitle} value={title} />
        <input type='submit' value='Add' />
      </form>
    </div>
  )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.myTodos.todos
})

export default connect(mapStateToProps, { addTodo })(TodoForm)