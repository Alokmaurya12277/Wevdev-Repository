import { use, useContext } from "react"
import { UserContext } from "./main"
import Navbar from "./components/Navbar";
import ChangeTheme from "./components/ChangeTheme";

function GrandCHild() {
  // const value = useContext(UserContext) //  useContext ka shot form

  const value = use(UserContext)          // use hai

  console.log(value);
  return (
    <div style={{ backgroundColor: "orange", padding: "20px" }}>
      <h1>GrandChild-{value}</h1>
    </div>
  )
}

function Child() {
  return (
    <div style={{ backgroundColor: "blue", padding: "20px" }}>
      <h1>Child</h1>
      <GrandCHild />
    </div>
  )
}

function Parent() {
  return (
    <div style={{ backgroundColor: "green", padding: "20px" }}>
      <h1>Parent</h1>
      <Child />
    </div>
  )
}

function App() {

  return (
    <div>
      <div  style={{ backgroundColor: "red", padding: "20px" }}>
        <Navbar />
      </div>
      <ChangeTheme />
    </div>
  )
}

export default App
