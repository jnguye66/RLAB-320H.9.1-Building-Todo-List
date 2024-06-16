import './styles.css'

function App() {
  return (
    <>
      <form className='todo-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input type="text" id='item' />
        </div>
        <button className='add-btn'>Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className='edit-btn'>Edit</button>
          <button className='del-btn'>Delete</button>
        </li>
      </ul>
    </>
  )
}

export default App