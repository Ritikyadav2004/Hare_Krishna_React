import React, { useState } from "react";
import UserAddress from "./components/UserAddress";

import UserDetails from "./components/UserDetails";
import PreviewCard from "./components/PreviewCard";
import './App.css'
function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: ""

  })

  const [preview, setPreview] = useState(false);
  
  function updateDetials(newDetails) {
    setUser((prev)=>({
      ...prev,
      ...newDetails
    }))
  }

  const [userState, setUserState] = useState('')

  const handUserState = (val) => {
    setUserState(val)

  }

  const handlePriview = (val) => {
    setPreview(val);
  }



  return (
    <>
    
      <div className="btns">
        <button className="btn" onClick={() => { handUserState("userDetails") }}>User Details</button>


        <button className="btn" onClick={() => { handUserState("userAddress") }}>User Address</button>
       





      </div>
      <h1>Enter Your Detials</h1>
      <div>
        {(userState === "userDetails") && <UserDetails detials={user} updateDetials={updateDetials} />}
        {(userState === "userAddress") && <UserAddress detials={user} updateDetials={updateDetials} />}
      </div>


     <div className="preview">
       <button onClick={() => handlePriview(!preview)}>Preview</button>
      {preview === true && <PreviewCard user={user} />}

     </div>
    </>
  )

}



export default App;