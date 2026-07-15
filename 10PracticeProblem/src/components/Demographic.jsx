import React from 'react'

const Demographic = ({demographic,updateDetails}) => {

    const handleChange=(e)=>{
        const {name,value}=e.target;
        updateDetails({[name]:value})
        
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("data saved "+JSON.stringify(demographic));
    }
  return (
    <div>
    
       <h1>Enter Your Details</h1>
       <form onSubmit={handleSubmit}>
        <input type="text" name='city' placeholder='Enter your city' value={demographic.city || ''} onChange={handleChange} /> <br />
        <input type="text" name='state' placeholder='Enter your state' value={demographic.state || ''} onChange={handleChange} /> <br />
        <input type="text" name='pincode' placeholder='Enter your pincode' value={demographic.pincode || ''} onChange={handleChange} /> <br />




        <button type='submit'>Submit</button>
       </form>

    </div>
  )
}

export default Demographic