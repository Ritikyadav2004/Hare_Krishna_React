import React from 'react'
import '../App.css'
export const Card = ({name,type}) => {

  //   type.forEach(element => {
  //   console.log(element);
  //  });
  return (
    <>
    
    <div >

      <div style={{margin:"20px 0px 0px 0px"}}>
        {
          type.map(animal=>{
            return(
              <li>{animal}</li>
            )
           
          })
        }

      
    </div>
    </div>
    
    
    </>


  )
}

export default Card;


