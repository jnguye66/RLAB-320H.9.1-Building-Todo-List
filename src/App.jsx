import { useState } from 'react'
import './styles.css'

function App() {
  // useState for individual todo item
  const [todo, setTodo] = useState('');
  // useState for the list of todo items
  const [todoList, setTodoList] = useState([]);

  // Function to add a new todo item to the current list of todos
  function handleSubmit(e) {
    e.preventDefault();

    setTodoList(currentTodoList => {
      return [...currentTodoList,
      { id: crypto.randomUUID(), task: todo, completed: false },
      ]
    })

    setTodo('');
  }

  // Function to toggle the checkbox
  // Also enables and disables the delete button
  function toggleTodo(id, completed) {
    setTodoList(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {

          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  // Deletes a specific task based on id
  function deleteTodo(id) {
    setTodoList(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <>
      <form className='todo-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            id='textbox'
            placeholder='Add task'
          />
        </div>
        <button className='add-btn'>Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {/* Short Circuiting */}
        {todoList.length === 0 && "No Todos Today"}
        {/* Maps Array of todos onto webpage */}
        {todoList.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.complete} onChange={(e) => { toggleTodo(todo.id, e.target.checked) }} />
                {todo.task}
              </label>
              <button className='edit-btn'>Edit</button>
              <button
                id='del-btn'
                onClick={() => deleteTodo(todo.id)}
                disabled={!todo.completed}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App