import React from 'react'

const UserName = ({user,updateDetials}) => {

  const handelChange=(e)=>{
         const{name , value}=e.target;
         updateDetials({[name]:value});
  }

  const handelSubmit=(e)=>{
       e.preventDefault();
       alert("You data is saved")
  }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" placeholder='enter your name' onChange={handelChange} value={user.name} />

        <input type="number" name="phone" placeholder='enter your phone' onChange={handelChange} value={user.phone}/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UserName