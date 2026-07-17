import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
const Github = () => {
  const data=useLoaderData();
    // const [data,setData]=useState('');
    // useEffect(()=>{
    // fetch('https://api.github.com/users/Ritikyadav2004')
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log(data);
    //     setData(data)
    // })
    // },[])

     
    //  console.log(data.json)
  return (
    <div className='bg-gray-600 text-center text-4xl text-white  m-4 p-4'>
        Name :{data.name} <br />
        Github followers : {data.followers} <br />
        Github Repository : {data.public_repos}
     <img src={data.avatar_url} alt="" width={300} />
    
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response=await fetch('https://api.github.com/users/Ritikyadav2004')
    
    return response.json(); // promis he ye 
}