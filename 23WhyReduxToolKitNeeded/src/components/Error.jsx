import React from 'react'
import { useNavigate } from 'react-router'

const Error = () => {
    const navigate= useNavigate();
  return (
    <div>Errors occurred please try again later
        <button onClick={()=>{navigate('/')}}>Go back to Home</button>
    </div>
  )
}

export default Error