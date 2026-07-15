import React from 'react'

const Preview = ({user}) => {
  return (
    <div >

        <ul>
            <h1 >Name    : {user.name}</h1>
            <h1 >Phone   : {user.phone}</h1>
            <h1 >Email   : {user.email}</h1>
            <h1 >City    : {user.city}</h1>
            <h1 >State   : {user.state}</h1>
            <h1 >Pincode : {user.pincode}</h1>
            

        </ul>
    </div>
  )
}

export default Preview