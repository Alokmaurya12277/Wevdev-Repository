
function Uncontrolcomponent() {

   
  function signup(e){
    e.preventDefault();
    const foemData = new FormData(e.target)
    console.log(Object.fromEntries(foemData));
    
    
    }

  return (
    <>
      <h1>Form Uncontrolcomponent</h1>
      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name: </label>
        <input 
        type="text" 
        name='name' 
        id='name' 
        />
        <br />

        <label htmlFor="email">Email: </label>
        <input type="text"
         name='email' 
         id='email'
         />
        <br />

        <label htmlFor="password">Password: </label>
        <input type="text"
         name='password' 
         id='password' 
         />
        <br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Uncontrolcomponent