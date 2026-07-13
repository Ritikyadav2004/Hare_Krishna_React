import React, { useState } from 'react'

const App = () => {

  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("")

  const passwordGenrator=()=>{
    
  }
  return (
    <div>Password Genrator</div>
  )
}

export default App