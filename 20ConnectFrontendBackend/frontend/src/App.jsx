
import { useState  , useEffect} from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes,setJokes]= useState([]);

  useEffect(()=>{
    axios.get('api/jokes')
      .then(response => {
        setJokes(response.data);
      })
      .catch(error => {
        console.error('Error fetching jokes:', error);
      });
  }, []);

  return (
 <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
    <h1 className='text-2xl font-bold text-center'>Hello Form frontend</h1>
      <h1 className='text-xl font-bold text-center'>Jokes:{jokes.length}</h1>
    {
      
      jokes.map((joke)=>{
        
          return(
          <div className='border border-gray-300 rounded-lg p-4 m-2 flex flex-col' key={joke.id}>
            <h2 className='text-lg font-bold'>{joke.title}</h2>
            <p className='text-white'>{joke.content}</p>
          </div>)
        
      })
    }

 </div>
  )
}

export default App
