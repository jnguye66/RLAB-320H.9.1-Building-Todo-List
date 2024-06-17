import { useState } from 'react';
import TodoForm from './TodoForm';

function TodoItem({ id, task, completed, toggleTodo, deleteTodo }) {

    // const [edit, setEdit] = useState({
    //     id: null,
    //     value: ''
    // });

    // function submitEdit(value){
    //     editTodo(edit.id, value);
    //     setEdit({
    //         id: null,
    //         value: ''
    //     })
    // }

    // if (edit.id) {
    //     return <TodoForm edit={edit} onSubmit={submitEdit}/>
    // }

    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => {
                        toggleTodo(id, e.target.checked)
                    }}
                />
                {task}
            </label>
            <button
                id='edit-btn'
                // onClick={() => editTodo(id)}
            >
                Edit
            </button>
            {/* Delete button will enable if checkbox is checked */}
            <button
                id='del-btn'
                onClick={() => deleteTodo(id)}
                disabled={!completed}
            >
                Delete
            </button>
        </li>
    )
}

export default TodoItem;