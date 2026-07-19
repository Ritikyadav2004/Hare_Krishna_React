import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)

      // yaha gloabal v aaribale me me data bhej raha  hu
    const handleSubmit=(e)=>{
       e.preventDefault();
       setUser({username,password});
    }
  return (
    <div>
        <h1>Login here !</h1>
         <input type="text"
          name="username" 
          placeholder='username'
          value={username}
          onChange={(e)=>setUsername(e.target.value)} 
          
          
          />
          <br />

         <input type="password"
          name="password"
          placeholder='enter password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />  <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login