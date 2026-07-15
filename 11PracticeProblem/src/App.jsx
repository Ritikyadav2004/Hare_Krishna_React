import React, { useState } from 'react'
import Species from './components/Species.jsx'
const App = () => {

  const [showReptile,setShowReptile]=useState(false);
  const [showMammles,setShowMammles]=useState(false);
  const [showBird,setShowBird]=useState(false);
  const mammles=['Lion','Tiger','Elaphant']
  const bird=['Parrot','egale'];
  const reptiles=['Snake','Snail','Earthworm'];
  return (
    <div>
      <h1>Animal Species</h1>
      <div>
        <button onClick={()=>setShowMammles(!showMammles)} style={{backgroundColor:showMammles ? "green":"white"}}>Mamles</button>
        <button onClick={()=>setShowBird(!showBird)} style={{backgroundColor:showBird? "green":"white"}}>Bird</button>
        <button onClick={()=>setShowReptile(!showReptile)} style={{backgroundColor:showReptile? "green":"white"}}>Reptiles</button>


        {/* conditional rendering */}
        {(showMammles===true && <Species name={mammles}/>)}
        {(showBird===true && <Species name={bird}/>)}
        {(showReptile===true && <Species name={reptiles}/>)}
        
      </div>
    </div>
  )
}

export default App