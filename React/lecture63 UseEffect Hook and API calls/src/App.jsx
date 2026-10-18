import { useEffect, useState } from 'react'
import axios from "axios"
function Timer() {

  useEffect(() =>{

    // let id = setInterval(() =>{
    //   console.log("hiii");
      
    // },2000)
    // return () => {
    //   console.log("clean up ")
    //   clearInterval(id)
    //  }

  },[])
  return (
    <div><h2>Timer Component</h2></div>
  )

}

function App() {
  const [produtCount, setProdutCount] = useState(0)
  const [product, setPrduct] = useState([])
  const [name, setName] = useState("")
  const [ShowTimer, setShowTimer] = useState(true)
  const [isLoading, setIsloading] = useState(true)


  // console.log(name);

  useEffect(() => {
    async function getProducts() {

      // let response = await fetch("https://dummyjson.com/products")
      // let data = await response.json();
      
      let {data} = await axios.get("https://dummyjson.com/products")
      setProdutCount(data.total)
      setPrduct(data.products)      // YHA PR TINO AK BATCH ME RERENDR HOGA
      setIsloading(false)
    }
    getProducts();
    console.log("kiki");

    return function () {
      console.log("clean up function");

    }

  }, [name])

// if(isLoading){
//  return <div class="loader"></div> 
// }

  return (
    <>

      <div>
       {ShowTimer &&   <Timer />}
        <button onClick={() => setShowTimer((prev) => !prev)}>Toggal Timer Component</button>
        Product- {produtCount}
        <input type="text" onInput={(e) => setName(e.target.value)} />
        
        <p>{name}</p>
        <ul>
          {
            isLoading ? <div class="loader"></div> :  product.map((p) => (
            <li key={p.id}>{p.title}</li>)
            
            )
          }
        </ul>
      </div>
    </>
  )
}

export default App
