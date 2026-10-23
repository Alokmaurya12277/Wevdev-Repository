
import React, { use, useContext } from 'react'
import { UserContext } from '../main'
import { ThemeContext } from '../context/ThemeContext'

function Navbar() {
    // let value = useContext(UserContext);
    // let value = use(useContext)           {/* short cut useContext ka */}

    let {theme} = use(ThemeContext)
    
  return (
    <div>
        <h1>Navbar</h1>
        <p>Theme: {theme}</p>
    </div>
  )
}

export default Navbar