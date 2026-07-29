// // import React from 'react'
// import UserAddress from '../components/UserAddress'
// import UserName from '../components/UserName'
// import UserPreview from '../components/UserPreview'
// import './App.css'
// // import { useState } from 'react';
// // import Card from '../components/Card';

// // const App = () => {
// //   const mamles=['Elephant','Giraf','hippo'];
// //   const bird=['parrot','Koyal','Egale']
// //   const reptile=['snale','snake','Scorpion']
// //   const [species,setSpecies]=useState('');

// //   const handleSpecies=(val)=>{
// //          setSpecies(val)
// //   }
// //   return (
// //     <div >
// //       <h1>Animals</h1>
// //       <div >
// //         <button className='cursor-pointer gap-1.5 border border-gray-400  rounded-2xl' onClick={()=>{handleSpecies('Mamles')}}>Mamales</button>
// //          {/* Conditional rendering */}
// //       {species=='Mamles' && <Card type={mamles}/>}
// //       <button  className='cursor-pointer gap-1.5 border border-gray-400  rounded-2xl'onClick={()=>{handleSpecies('Bird')}}>Bird</button>
// //        {/* Conditional rendering */}
// //       {species=='Bird' && <Card type={bird}/>}
// //       <button className='cursor-pointer gap-1.5 border border-gray-400  rounded-2xl' onClick={()=>{handleSpecies('Reptile')}}>Reptiles</button>
// //        {/* Conditional rendering */}
// //       {species=='Reptile' && <Card type={reptile}/>}
// //       </div>

     
// //     </div>
// //   )
// // }

// // export default App



// import React, { useState } from 'react'

// const App = () => {
//   const [state,setState]=useState('')
//   const [preview,setPreview]=useState(false);
//   const [user,setuser]=useState( {name:'',  phone:'',  Zipcode:'',  City:''})
//   const updateDetials=(newDetails)=>{
//     setuser((prev)=>({
//       ...prev,
//       ...newDetails

//     }))

    

//   }

 
//   return (
//     <div className='gap-2'>
//       <button className="btn" onClick={()=>setState('userName')} >Add User Name</button>

//       {state=='userName' && <UserName user={user}  updateDetials={updateDetials}/>}
//       <button className="btn" onClick={()=>setState('userAddress')}>User Addres</button>
//       {state=='userAddress' && <UserAddress user={user}  updateDetials={updateDetials}/>}
    
//     <button className="btn" onClick={()=>setPreview(!preview)}>Preview</button>
//       {preview==true && <UserPreview user={user}  />}

      
     
   
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'
// import Card from '../components/Card'

// const App = () => {
//   const [reptile,setReptile]=useState(false);
//   const [bird,setBird]=useState(false)
//   const [mamles,setMamles]=useState(false);

//   const Bird=['Eagle','jack Sparrow','Parrot']
//   const Mamles=['Lion','Tiger','Leopard','Elephant']
//   const Reptile=['Snake','Snail','Frog']

//   return (
//     <div>
//       <button onClick={()=>setReptile(!reptile)} style={{backgroundColor:reptile ? 'green':'white'}}>Reptile</button>
//       <button onClick={()=>setMamles(!mamles)} style={{backgroundColor:mamles?'green':'white'}}>Mamles</button>
//       <button onClick={()=>setBird(!bird)} style={{backgroundColor:bird?'green':'white'}}>Bird</button>


//       {reptile && <Card type={Reptile}/>}
//       {bird && <Card type={Bird}/>}
//       {mamles && <Card type={Mamles}/>}
      

//     </div>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [count,setCount]=useState(0);
//   const [isRunning,setIsRunning]=useState(false);

  
//   useEffect(()=>{
    
//     let timer;
//     if(isRunning)
//     {
//       timer=setInterval(()=>{
//             setCount((prev)=>prev+1)
//       },1000)
//     }
       

//     return ()=>clearInterval(timer);

//   },[isRunning])

//   const handleStart=()=>{
//     setIsRunning(true);
//   }

//   const handleStop=()=>{
//     setIsRunning(false);
//     // setCount(0);
//   }
//   const handleReset=()=>{
//     setIsRunning(false);
//     setCount(0);
//   }
//   return (
//     <div>
//       Digital Clock
//       <h1>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [time,setTime]=useState(new Date());
//   useEffect(()=>{
//     const timerr=setInterval(()=>{
//       setTime(new Date());
//     },1000)
//     return ()=>clearInterval(timerr)
//   },[])
//   return (
//     <div>Clock <br />
//       {time.toLocaleTimeString()}
//     </div>

//   )
// }

// export default App