import { useState } from "react"
import { Counter } from "./components/Counter"
import Navbar from "./components/Navbar"
import Todo from "./components/Todo"



function App() {
// let [value,setValue] = useState(0)

// function counteData(refrence){
//   setValue(refrence)
//   console.log(value);
//   }
  
    // TODO KE LIYE


   return (
    <div>
      {/* <Navbar value = {value}/><br/>
     <Counter counteData = {counteData} /> */}

     <Todo/>
    </div>
   )
}

export default App
