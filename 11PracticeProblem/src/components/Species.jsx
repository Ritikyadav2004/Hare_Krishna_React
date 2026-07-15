import React from 'react'

const Species = ({name}) => {
  return (
    <div>
        {
            name.map((names)=>{
                return(
                 <ul>
                       <li>{names}</li>
                 </ul>
                )
            })
        }



    </div>
  )
}

export default Species