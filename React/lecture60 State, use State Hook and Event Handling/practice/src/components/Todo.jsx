

import React, { useState } from 'react'

function Todo() {
  let [value,setValue] = useState("")
  let [Todos,setTodos] = useState(["Reading","Bathing","College"])

function inputValue(e){
    setValue(e.target.value)
    
}

function addTodo(e){
    e.preventDefault()
     if(!value.trim()){
        return;
     }  
    setTodos((prev) => 
      [...prev,value]    
    )

    setValue("")
}

  return (
    <div>
        <h2>Todo</h2>
      <form onSubmit={addTodo} >
        <input value={value} type="text" onInput={inputValue} />
        <button>Add</button>
      </form>
      
      <ul>
        {Todos.map((element) => 
          <li>{element}</li>
          )}
      </ul>

    </div>
  )
}

export default Todo