import { createContext, StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

export let UserContext = createContext(null)
let userName = "Alok"

createRoot(document.getElementById('root')).render(
//  <>
//    <UserContext value={userName}  >
//      <App />

//       {/* <Navbar/>             userContext me jise bhi call kru use uper vale excess kr lega */}
                        
//    </UserContext>
//   {/* <Navbar/>                    yha pr bahar nhi access kr payega                 */}

//  </>

<ThemeProvider>
  <App/>               { /* yha app ko as a argument pass ho rha hai */}
</ThemeProvider>
)
