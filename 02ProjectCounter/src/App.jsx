import { useState } from 'react'

import './App.css'

function App() {
// let count=9;
let [count,setCount]=useState(0);

const addvalue=()=>{
  setCount(count+1);
}

const  decreaseValue=()=>{
  
  setCount(count-1)
  if(count-1<0)
  {
    setCount(count=0)
  }
}



  return (
    <div id='mainContent'>
      <h1>Ritik Aur Code</h1>
      <h2>Count : {count}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>


      <footer>footer Value: {count}</footer>
    </div>
  )
}

export default App
