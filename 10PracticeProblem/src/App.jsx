import React from 'react'
import { useState } from 'react'
import UserDetails from './components/UserDetails.jsx'
import Demographic from './components/Demographic.jsx'
import Preview from './components/Preview.jsx'

const App = () => {

  // for storing data we creating hooks
  const [userState,setUserState]=useState('');
  const [preview,setPreview]=useState(false);
  const handleUserState=(val)=>{
    setUserState(val);
  }
  const [user,setUserDetails]=useState({
    name:"",
    phone:"",
    email:"",
    city:"",
    state:"",
    pincode:""

  })

  const updateDetails=(newDetails)=>
  {
              setUserDetails((prev)=>({
                ...prev,
                ...newDetails
              }))
  }

  const handlePreview=(val)=>{
setPreview(val);
  }

  return (
    <div>
            <h1>Fill your Information</h1>
            <button onClick={()=>handleUserState('userInfo')}>User Info</button>
            <button  onClick={()=>handleUserState('demographicInfo')}>Demographic </button>
            <button onClick={()=>handlePreview(!preview)}>Preview</button>

            <div>
              {userState==="userInfo" && <UserDetails user={user} updateDetails={updateDetails}/>}

              {userState==="demographicInfo" && <Demographic demographic={user} updateDetails={updateDetails} />}


              {preview===true && <Preview user={user}/>}
            </div>


    </div>
  )
}

export default App