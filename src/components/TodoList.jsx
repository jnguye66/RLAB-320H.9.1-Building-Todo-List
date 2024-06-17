import TodoItem from "./TodoItem"

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {/* Map all todo items */}
            {todos.map(todo => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        // editTodo={editTodo}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList;