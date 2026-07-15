import React from 'react'
import '../App.css';
const UserDetails = ({detials,updateDetials}) => {

    const handleChange=(e)=>{
        const {name,value}= e.target;
        updateDetials({[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Data Saved "+JSON.stringify(detials))
    }

  return (

     

    <div className='form'>

      
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" 
            id='name'
            placeholder='Enter Name'
            name='name'
             value={detials.name || ''}
            onChange={handleChange}/>
           <br />


             <label htmlFor="email">Email</label>
            <input type="text" 
            id='email'
            placeholder='Enter Email'
            name='email'
            value={detials.email || ''}
            onChange={handleChange}/>
            <br />
            
            


             <label htmlFor="phone">phone</label>
            <input type="text" 
            id='phone'
            placeholder='Enter Phone No'
            name='phone'
            value={detials.phone || ''}
            onChange={handleChange}/>

<br />

 

<button type='submit'> Submit</button>
        </form>
    </div>

 
  )
}

export default UserDetails