
import './App.css'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import WeatherCard from '../components/WeatherCard/WeatherCard'
import WeatherDetails from '../components/WeatherDetails/WeatherDetails'
import Loading from '../components/Loading/Loading'
import ErrorMessage from '../components/Error/ErrorMessage'
import { useState ,useEffect } from 'react'


function App() {

  const [city,setCity]=useState('Jabalpur')
  const [weather,setWeather]=useState(null)
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;

  
  async function fetchWeather()
  {
     try {

        setLoading(true);
        setError("");

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        setWeather(data);

    } catch (err) {

        setError(err.message);
        //  console.log(err.message);

    } finally {

        setLoading(false);

    }
  }
  useEffect(() => {
    fetchWeather();
}, []);

  return (
    <>
    <Header/>
    <SearchBar
    city={city}
    setCity={setCity}
    fetchWeather={fetchWeather}

/>
    {loading && <Loading/>}
    {error && <ErrorMessage message={error} />}
    { weather && !loading && !error && <WeatherCard weather={weather}/>}
    {weather && !loading && !error &&  <WeatherDetails weather={weather}/>}

    
    <div className="mt-8 text-center">
  <p className="text-sm text-gray-600">
    Made with <span className="text-red-500">❤️</span> by{" "}
    <span className="font-semibold text-sky-600 hover:text-sky-700 transition-colors">
      Ritik
    </span>{" "}
    • MERN Stack Developer
  </p>
</div>

    
    </>
  )
}

export default App
