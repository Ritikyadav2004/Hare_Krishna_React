import React, { useState , useEffect } from 'react'



const App = () => {

  const colors = ["red", "blue", "green", "yellow", "grey", "magenta", "lavender", "black"];
  const oppositeColors = [
  "cyan",      // opposite of red
  "orange",    // opposite of blue
  "magenta",   // opposite of green
  "purple",    // opposite of yellow
  "white",     // opposite of grey
  "green",     // opposite of magenta
  "gold",      // opposite of lavender
  "white"      // opposite of black
];

  const [color,setColor]=useState("black")
  const [index,setIndex]=useState(0);
  const [auto, setAuto] = useState(false); // auto-change toggle
  const [fastUpdate,setFastUpdate]=useState(false)
  const [textColor,setTextColor]=useState('white');

  const [pasue,setPause]=useState(false);
  
  useEffect(() => {
    let interval;
    if (auto && fastUpdate) {
      interval = setInterval(() => {
        setColor(colors[index]); // background color update
        setTextColor(oppositeColors[index])
        setIndex((prev) => (prev + 1) % colors.length); // next index
      }, 100); // 1 second delay
    }

    else if(auto && !fastUpdate)
    {
      interval = setInterval(() => {
        setColor(colors[index]); // background color update
         setTextColor(oppositeColors[index])
        setIndex((prev) => (prev + 1) % colors.length); // next index
      }, 1000); // 1 second delay
    }
    
    return () => clearInterval(interval); // cleanup
  }, [auto, index]); // run when auto or index changes
  

  return (
    
    <div className='w-full h-screen duration-200 flex flex-col items-center justify-center gap-4'
    style={{backgroundColor:color,}}
    >
      <h1 className="text-6xl font-bold" style={{color:textColor}}>Ritik Aur Code</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-3 gap-4">
    <button  onClick={()=>setColor("red")}
     className="px-4 py-2 rounded bg-red-500 text-white">Red</button>
    <button onClick={()=>setColor('blue')}
    className="px-4 py-2 rounded bg-blue-500 text-white">Blue</button>
    <button onClick={()=>setColor('green')}
    className="px-4 py-2 rounded bg-green-500 text-white">Green</button>
    <button  onClick={()=>setColor('yellow')}
    className="px-4 py-2 rounded bg-yellow-500 text-black">Yellow</button>
    <button  onClick={()=>setColor('grey')}
    className="px-4 py-2 rounded bg-gray-500 text-white">Grey</button>
    <button  onClick={()=>setColor('magenta')}
    className="px-4 py-2 rounded bg-pink-500 text-white"  >Magenta</button>
    <button onClick={()=>setColor('#967BB6')} className="px-4 py-2 rounded bg-purple-300 text-black">Lavender</button>
  <button onClick={()=>{setColor('black');setTextColor("white")}}
    className="px-4 py-2 rounded bg-black text-white">Black</button>
    <button  onClick={()=>{setColor('white') ; setTextColor('black')}}
    className="px-4 py-2 rounded bg-white text-black border">Reset</button>

    <button onClick={()=>{setAuto(true); setFastUpdate(true);}} className="px-4 py-2 rounded bg-white text-black border">Fast Auto Change</button>
    <button onClick={()=>{setAuto(true); setFastUpdate(false);}} className="px-4 py-2 rounded bg-white text-black border">Auto Change</button>
    <button onClick={()=>{setAuto(false);setFastUpdate(false);}} className="px-4 py-2 rounded bg-white text-black border">Pause</button>
  </div>

    </div>
  )
}

export default App