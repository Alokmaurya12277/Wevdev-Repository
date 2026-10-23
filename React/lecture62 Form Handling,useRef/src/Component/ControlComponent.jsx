
import { useState } from "react";
function ControlComponent() {
  //  let [name,setName] = useState("")
  //  let [email,setEmail] = useState("")
  //  let [password,setPassword] = useState("")
  // SHORT FORM
  const [form, setForm] = useState({ name: "alok", email: "alok@gmail.com", password: "" })

  function signup(e) {
    e.preventDefault();
    console.log(form);
  }

  function handalinput(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }))

  }

  return (
    <>
      <h1>Form Controlcomponent</h1>
      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name: </label>
        <input value={form.name}
          type="text"
          name='name'
          id='name'
          onInput={handalinput} />
        <br />

        <label htmlFor="email">Email: </label>
        <input value={form.email}
          type="text"
          name='email'
          id='email'
          onInput={handalinput} />
        <br />

        <label htmlFor="password">Password: </label>
        <input type="text"
          name='password'
          id='password'
          onInput={handalinput} />
        <br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default ControlComponent