import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [time,setTime]=useState(new Date())
    useEffect(()=>{
        const  timer=setInterval(()=>{
            setTime(new Date())

        },1000)


        return ()=>clearInterval(timer)
    },[])

    const [counter,setCounter]= useState(0);
    const [isRunning,setIsRunning]=useState(false);

     useEffect(()=>{
        let timer;
        // only start when its true
        if(isRunning)
        {
            timer=setInterval(()=>{
                         setCounter((prev)=>prev+1);
            },100)
        }

        return ()=>clearInterval(timer); // tali unmount ho sake acche se 
     },[isRunning])

    const handleStart=()=>setIsRunning(true);
    const handleStop=()=>setIsRunning(false);
    const handleReset=()=>{
        setIsRunning(false);
        setCounter(0);
    





    }
    


    const [count,setCount]= useState(0);
    const handleAdd=()=>{
        setCount((prev)=>prev+1);
    }

    const handleSubtract=()=>{
        if(count-1>0)
        {
            setCount((prev)=>prev-1);
        }
    }

    const handleCountReset=()=>setCount(0);
    
  return (
    <div>


     <div>
           <h1 className='text-4xl text-center text-white bg-gray-700 '>Digital Clock</h1>
           <small className='m-5 p-5 text-4xl text-white bg-gray-600 text-center flex justify-center'>{time.toLocaleTimeString()}</small>
        
     </div>


     <div >
        <h1 className='text-4xl text-center text-white bg-gray-700 '>Digital Stop Watch</h1>
        <small className='m-5 p-5 text-4xl text-white bg-gray-600 text-center flex justify-center'>{counter}</small>
        <div className='flex justify-center gap-1'>
        <button onClick={handleStart} className='bg-green-500 px-3 py-1 text-white rounded cursor-pointer'>Start</button>
        <button onClick={handleStop} className='bg-red-500 px-3 py-1 text-white rounded cursor-pointer'>Stop</button>
        <button onClick={handleReset}  className='bg-gray-500 px-3 py-1 text-white rounded cursor-pointer'>Reset</button>

        </div><br />
                     
            <h1 className='text-4xl text-center text-white bg-gray-700 '>Counter</h1>
            <small className='m-5 p-5 text-4xl text-white bg-gray-600 text-center flex justify-center'>{count}</small>
            <div className='flex justify-center'>
                <button className='bg-green-500 px-3 py-1 text-white rounded cursor-pointer' onClick={handleAdd}>ADD</button>
                <button className='bg-red-500 px-3 py-1 text-white rounded cursor-pointer' onClick={handleSubtract}>SUB</button>
                <button className='bg-gray-500 px-3 py-1 text-white rounded cursor-pointer' onClick={handleCountReset}>RESET</button>

            </div>

        <div>

            
        </div>
     </div>
    </div>
  )
}

export default App