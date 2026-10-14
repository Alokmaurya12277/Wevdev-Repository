
import React, { useState } from 'react'

function Todo() {

    let [value, setValue] = useState("")
    let [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"])
    
    function printValue(e) {
        setValue(e.target.value)
    }

    function addTodo(e) {
        e.preventDefault()
        if (!value.trim()) {
            return
        }

        setTodos((prev) => 
            [...prev, value]
          
        )

         setValue("")
    }
   
    return (
        <div>
            <h1>Todo</h1>
            <form onSubmit={addTodo}>
                {/* <input value={value} type="text" onInput={printValue} /> */}
                <input value={value} type="text" onInput={(e) => setValue(e.target.value)} />
                <button>add</button>
            </form>

            <ul>
                {todos.map((element) =>
                    <li>{element}</li>
                )}
            </ul>
        </div>
    )
}

export default Todo