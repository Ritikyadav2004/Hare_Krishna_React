import React from 'react'

const Card = ({type}) => {
  return (
    <div>
      {type.map((animal,index)=>(
     <ul>
      <li key={index}>{animal}</li>
     </ul>
      ))}
    </div>
  )
}

export default Card