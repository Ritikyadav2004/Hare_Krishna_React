import React from 'react'

const PreviewCard = ({user}) => {

    const {name, email,phone,street,city,state,pincode}=user;
  return (
    <div>
        <ul>
            <li>Name: {name}</li>
            <li>email: {email}</li>
            <li>phone: {phone}</li>
            <li>street:{street}</li>
            <li>city: {city}</li>
            <li>State: {state}</li>
            <li>Zipcode: {pincode}</li>
        </ul>
    </div>
  )
}

export default PreviewCard