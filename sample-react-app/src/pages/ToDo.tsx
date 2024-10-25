import { useState } from "react";

interface IToDo {

}

function ToDoApp() {
    const [todos, setTodos] = useState<string[]>([])
    const [inputValue, setInputValue] = useState('')

    function handleChange(e: any) {
        setInputValue(e.target.value)
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')
    }

    function handleDelete(index: number) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form>
                <input type='text' value={inputValue} onChange={handleChange} />
                <button onClick={handleSubmit}>Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ToDoApp;