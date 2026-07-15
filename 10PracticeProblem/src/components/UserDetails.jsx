import React from 'react'
import { use } from 'react'

const UserDetails = ({user,updateDetails}) => {
    
    const handleSubmit=(e)=>{
        e.preventDefault()
         alert("Data Saved "+JSON.stringify(user))
    }

    const handleChange=(e)=>{
        const {name ,value}=e.target;
        updateDetails({[name]:value});
    }


  return (
    <div>
         <h1>Enter Your Details</h1>
         <form onSubmit={handleSubmit}>
   
      <input type="text" name='name' placeholder='Enter name ' value={user.name || '' }  onChange={handleChange} /> <br />
      <input type="text" name='phone'placeholder='Enter phone ' value={user.phone || ''}  onChange={handleChange}  /> <br />
      <input type="text" name='email' placeholder='Enter email ' value={user.email || ''}  onChange={handleChange}  /> <br />

      <button  type='submit'>submit</button>
      
         </form>


    </div>
  )
}

export default UserDetails