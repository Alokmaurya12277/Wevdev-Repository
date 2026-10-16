import { useState } from "react"

function Product({ name }) {
  let [quantity, setQuantity] = useState(0)

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => setQuantity((prev) => prev + 1)}>
        Quantity : {quantity}
      </button>
    </div>
  )
}

function Key() {
  const [producsts, setProducts] = useState([
    { id: 1, name: "Mouse" },
    { id: 2, name: "Monitor" },
    { id: 3, name: "Keybord" },
    { id: 4, name: "Mobile" }])

  function removeFirstProducts() {
    setProducts((prev) =>
      prev.slice(1)
    )
  }

  return (
    <>
      <ul>
        {producsts.map(({name,id})=>
          <Product key={id} name={name} />
        )}
      </ul>

      <button onClick={removeFirstProducts}>Remove first Product</button>

    </>
  )
}

export default Key