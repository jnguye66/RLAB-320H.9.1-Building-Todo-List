import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import "./styles.css"

export default function App() {
  // useState that gathers it's information from
  // the useEffect below
  const [todos, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  // useEffect that updates local storage to hold new todos
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  // Adds a todo item to the todo list
  function addTodo(task) {
    setTodoList(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), task, completed: false },
      ]
    })
  }

  // function editTodo(id, newValue) {
  //   setTodoList(currentTodos => {
  //     currentTodos.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todo, newValue }
  //       }
  //       return todo;
  //     })
  //   })
  // }

  // Toggles the checkbox
  function toggleTodo(id, completed) {
    setTodoList(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  // Deletes the selected completed item
  function deleteTodo(id) {
    setTodoList(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  //==============================================================//
  // App
  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  )
}