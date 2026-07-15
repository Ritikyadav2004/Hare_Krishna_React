import React, { useState } from 'react'

const App = () => {

  const [species,setSpecies]=useState('')
  const [data,setData]=useState('');
  return (
    <div>
      <h1>Animal Species</h1>
      <div>
        <button>Mamles</button>
        <button>Bird</button>
        <button>Reptiles</button>
        
      </div>
    </div>
  )
}

export default App