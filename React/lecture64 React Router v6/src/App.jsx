import { useState } from 'react'
import { Link, Outlet, Route, Routes, useParams } from "react-router"
import './App.css'
import Login from './Component/Login'
import Dashbord from './Component/Dashbord'


let products = [
  {
    id:1,
    title:"Laptop"
  },
  {
    id:2,
    title:"Mobile"
  }
]
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        {
          products.map((p) => <section><Link to={`/product-page/${p.id}`}>{p.title}</Link></section>)
        }
      </div>
    </div>
  )
}

// function ProductPage() {
//   return <h1>Product page</h1>
// }

function AboutUs() {
  return <h1>About us</h1>
}



function ProductPage(){
  const {id} = useParams()

  const data = products.find((p) => p.id=== Number(id))
 
  
  return (
    <div>
      <h1>Product Page</h1>
      {data ? <p>{data.title}</p> : "No Product Found"}
    </div>
  )
}

function Navbar() {
  return (
    <>
     <ul>
       <Link to={"/"}>Home</Link>
       <br />
        <Link to={"/product-page"}>Product Page</Link>
        <br />
        <Link to={"/login"}>login</Link>
        <br />
        <Link to={"/about-us"}>About Us</Link>
      </ul>
         <Outlet/>
    </>
  )
}
//  {page == "Home" && <Home/> }
//  {page == "ProductPage" && <ProductPage/>}
//  {page == "AboutUs" && <AboutUs/>}

function App() {
  const [page, setPage] = useState("home")

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/product-page/:id/:title" element={<ProductPage/>} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/dashbord' element={<Dashbord/>} />
      </Route>

      <Route path='/contect-us' element={<h2>Context us</h2> }/>
      <Route path='/login' element={<Login/> }/>

      <Route path='*' element={<div><h1>page not found</h1> 
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVNzuaEygW_XyqDHbcJP--lbT_-0AUlxjyMfDh_NdkA&s=10'/>  </div> }/>
   
   </Routes>
  )
}

export default App
