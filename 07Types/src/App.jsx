import React, { useState } from "react";
import './App.css'
import Card from './components/Card.jsx'
function App()
{
    const [species,setSpecies]=useState('');
    const handleSpecies=(val)=>{
      setSpecies(val)
     

  }

  const mamles=['Lion','tiger','Elephant'];
  const reptiles=['Snake','Snail','turtle'];
  const bird=['bulbul','Parrot','koyal'];
  return(
    <>     
            <div className="Heading"><h1>Animal Class</h1></div>
             <div className="Species">
          
           <div>
             <button className="btns"  onClick={()=>handleSpecies('mamles')}>Mamles</button>
               {species==="mamles" && <Card type={mamles}/>}
           </div>
            <div>
              <button className="btns" onClick={()=>handleSpecies('reptiles')}>Reptiles</button>
              {species==="reptiles" && <Card type={reptiles}/>}
            </div>
           <div>
             <button  className="btns" onClick={()=>handleSpecies("bird")}>Bird</button>
            {species==="bird" && <Card type={bird}/>}

           </div>

            <div>
             <button  className="btns" onClick={()=>handleSpecies("ALL")}>ALL</button>
            {species==="ALL" && <Card name="Bird" type={bird}/>}
            { species==="ALL" && <Card name ="reptiles" type={reptiles}/>}
            { species==="ALL" && <Card  name="mamles" type={mamles}/>}

           </div>
         
          
            




           </div>
    </>
  )
}

export default App;