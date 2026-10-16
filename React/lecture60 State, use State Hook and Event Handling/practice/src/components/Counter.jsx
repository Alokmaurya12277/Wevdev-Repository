

import React, { useState } from 'react'


export  function Counter({counteData}) {
let [value, setValue] = useState(0)

    function increment(){
        setValue((prev) => prev+1)
        counteData(++value)
    }

    function decrement(){
        // let [value,setValue] = useState(0)
        setValue((prev) => prev-1)
         counteData(--value)
    }

  return (
    <div>
        <h2>Hello ji</h2>
        <button onClick={increment} >+</button>
        <p>{value}</p>
        <button onClick={decrement}>-</button>
    </div>
  )
}
