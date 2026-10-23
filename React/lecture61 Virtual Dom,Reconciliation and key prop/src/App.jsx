import { useState } from 'react'
import './App.css'
import Key from './component/Key';

function Counter(){
   const [count, setCount] = useState(0);
   return (
    <div>
      <h1>{count} </h1>
       <button onClick={() => setCount((prev) => prev+1)} >Increment</button>
    </div>
   )
}

function App() {
  const [changeTag,setChangeTag] = useState(false)
  return (
    <div>
      <h2>hii</h2>
      <h3>hello</h3>
     {changeTag ? (
      <div>
        <p>Div Tag</p>
        <Counter/>
      </div> 
      ) : (
        <section>
          <p>Sectiion Tag</p>
          <Counter/>
        </section>
      )} 
        <div className={changeTag ? "active" : "inactive"}>
        <Counter/>
      </div> 
 
    {
      changeTag ? <Counter/> : <Counter/>
    } 

      <button onClick={() => setChangeTag((prev) => !prev)}>Change Tag</button>
      <Key/>
    </div> 
    
  )
}



export default App
