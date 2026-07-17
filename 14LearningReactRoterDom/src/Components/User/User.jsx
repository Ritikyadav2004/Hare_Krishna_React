import React from 'react'
import { useParams } from 'react-router'
const User = () => {
    const {userId}=useParams();
  return (
    <div className="bg-gray-700 text-white text-3xl text-center"
 >User:{userId.toUpperCase()}</div>
  )
}

export default User