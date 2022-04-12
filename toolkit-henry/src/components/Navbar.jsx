import React from 'react'
import { useSelector } from 'react-redux'
import { todoSelector } from '../store/reducers/Todos/todosSlice'

const Navbar = () => {
  const todos = useSelector(todoSelector)
  const length = todos.length
  return (
    <div className='navbar'>
      <h1>
        Learn Redux
      </h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total: {length}</li>
      </ul>
    </div>
  )
}

// Navbar.propTypes = {
//   todos: PropTypes.array.isRequired
// }

// const mapStateToProps = state => ({
//   todos: state.myTodos.todos
// })

// export default connect(mapStateToProps, {})(Navbar)
export default Navbar