import React from 'react'
import '../App.css'
const UserAddress = ({detials,updateDetials}) => {

    const handleChange=(e)=>
    {
        const {name,value}=e.target
        updateDetials({[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Data Saved "+JSON.stringify(detials))
    }
  return (
    <div className='form'>
        

        <form onSubmit={handleSubmit}>
            <label htmlFor="street">street</label>
            <input type="text" placeholder='Enter your Street' name='street' id='street' value={detials.street || ""} onChange={handleChange} />
<br />
            <label htmlFor="city">city</label>
            <input type="text" placeholder='Enter your city' name='city' id='city' value={detials.city || ""} onChange={handleChange} />
<br />
            <label htmlFor="state">state</label>
            <input type="text" placeholder='Enter your state' name='state' id='state' value={detials.state || ""} onChange={handleChange} />
<br />
            <label htmlFor="pincode">pincode</label>
            <input type="text" placeholder='Enter your pincode' name='pincode' id='pincode' value={detials.pincode || ""} onChange={handleChange} />
    <br />
            <button type='submit'> Submit</button>

        </form>

    </div>
  )
}

export default UserAddress