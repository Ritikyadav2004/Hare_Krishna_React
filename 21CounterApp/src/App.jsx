import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useEffectEvent } from 'react';
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [stratState, setStartState] = useState(false)
  const [stopState,setStopState]=useState(false)
  
  const [resetState, setResetState] = useState(false)

  const ontick = useEffectEvent(() => {
    setCount(count + increment)
  })


  useEffect(() => {

    if(stopState)
    {
      return 
    }
    
    if(stratState){
    
      const id = setInterval(() => {
      ontick();
    }, 1000)

    return () => {
      clearInterval(id)
    }}
    
  }, [stopState,stratState])

  const handleCount = (val) => {
    setStartState(val)
     setStopState(false);
    setStartState(true);

  }

  const handleStop = (val) => {
    setStopState(val)
    {
      
      return () => {
      const num=clearInterval(id)
      setCount(num)
    }

    }
  }


  const handleReset = (val) => {
    setResetState(val)
    if (resetState) {
      setCount(0)
    }
  }
  return (
    <div>
      <h1>Count</h1>
      <h1> {count}</h1>

      <div>
        <button onClick={() => {handleCount(true) , handleStop(!stopState)}}>Stop</button>
        <button onClick={() =>{ handleStop(!stopState) , handleCount(!stratState) }  }>Start</button>
        <button onClick={() => handleReset(true)}>Reset</button>



      </div>
    </div>
  )
}

export default App