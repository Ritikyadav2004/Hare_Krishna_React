import React, { useState } from "react";
import './App.css'
function App()
{     


      const [counter,setCounter]=useState(0);

      function add()
      {
        setCounter(counter+1);
      }

      function dec()
      { 
        if(counter>=1)setCounter(counter-1)

          setCounter(counter=0)

      }

  return(
    <div className="counter">
         <h1>Counter</h1>

         <div className="Display">Count:{counter}</div>

        <div className="buttons">
           <button  onClick={add}
           className="btn">+</button>
         <button onClick={dec} className="btn">-</button>
        </div>
    </div>
  )
}


export default App