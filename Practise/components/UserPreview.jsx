import React from 'react'

const UserPreview = ({user}) => {
  return (
    <div>
        <h1>{user.name}</h1>
        <h2>{user.phone}</h2>
        <h3>{user.Zipcode}</h3>
        <h4>{user.City}</h4>
    </div>
  )
}

export default UserPreview