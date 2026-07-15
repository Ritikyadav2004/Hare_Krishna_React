import React from 'react'
import { useState } from 'react'
import InputPara from './components/InputPara.jsx';

import Preview from './components/Preview.jsx';
const App = () => {
  const [para,setPara]=useState("");
  const [toggle,setToggle]=useState(false)
  const [preview,setPreview]=useState(false);
  const updatePara=(newPara)=>{
    // setPara((prev)=>({
    //   ...prev,
    //   ...newPara
    // }))
    setPara(newPara)
  }
  const handlePreview=(val)=>
  {
    setPreview(val)
  }

  const handlePara=(val)=>{
    setToggle(val)
  }
  
  return (
    <div>
           <button onClick={()=>handlePara(!toggle)}>Enter text</button>
           {(toggle===true) && <InputPara para={para} updatePara={updatePara}/>}

           <button  onClick={()=>handlePreview(!preview)}>Preview</button>

           {(preview==true) && <Preview para={para}/>}

    </div>
  )
}

export default App