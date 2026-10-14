
import React, { useState } from 'react'

function Counter({printCountValue}) {
  let [value,setValue] = useState(0)
   
  function increment(){
    // count++;
    // setValue(value+1)
    // setValue(value +2)
    // setValue(value+3)          // last vale ke hisab se update hoga
     
    setValue((prev) => prev + 1)
      printCountValue(++value) 
    // setValue((prev) => prev + 1)    // ye function value ko store krta hai and render hota hai

    // setValue(value++)
    // setValue(value++)
    // setValue(value++)    // post increment ho rha esliye 2 ans
 
  

    // setValue(++value)         // pre hai isliye dealy nhi hoga
    // setValue(value++)     // post hai isliye dealy hoga 

    // setValue(++value)
    // setValue(++value)
    // setValue(++value)       // pre incerment ho rha esliye 3 ans

  }
  function decrement(){
  setValue((prev) => prev-1)
    printCountValue(--value)
    
  }

  return (
   <div>
    <h1>Counter</h1>

    <button onClick={increment} >+</button>
    <p>{value} </p>
    <button onClick={decrement} >-</button>
   </div>
  )
}

export default Counter