import React from 'react'
import {useNavigate} from 'react-router'

function Login() {
  const navigate =  useNavigate()

    function handleLogin(e) {
        e.preventDefault()
        console.log("login");
        navigate("/dashbord")

    }

    return (
        <div>
            <h1>Login</h1>
            <form onClick={handleLogin}>
                <input type="text" name='username' id='' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login