import { useState } from "react"

const ToDoApp = () => {

    const [todos, setToDos] = useState<string[]>([])
    const [input, setInput] = useState("")

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setInput(value)
    }

    function updateToDoList() {
        setToDos([...todos, input])
        setInput("")
    }

    return <div>
        <h2>ToDo App</h2>

        <input
            placeholder="add new todo"
            value={input}
            onChange={handleInputChange}
        />
        <button onClick={updateToDoList}>Add new Todo</button>

        {todos.map((todo, index) => <div key={todo + index}>{todo}</div>)}
    </div>

}

export default ToDoApp