import React from 'react'

const UserAddress = ({user,updateDetials}) => {
  const handleChange=(e)=>{
    const {name,value}=e.target;
    updateDetials({[name]:value})

   
  }

   const handelSubmit=(e)=>{
      e.preventDefault();
      alert('Data Saved');
    }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name='Zipcode' placeholder='enter zipcode' value={user.Zipcode} onChange={handleChange} />
        <input type="text" name="City" placeholder='enter city' value={user.City} onChange={handleChange} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UserAddress