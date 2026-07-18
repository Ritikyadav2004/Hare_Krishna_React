import "./WeatherCard.css";

   
function WeatherCard({weather}) {
  return (
    <section className="weather-card">

      <div className="weather-icon">
        🌤️
      </div>

      <h2 className="city-name">
        {weather.name}
      </h2>

      <p className="country">
        {weather.sys.country}
      </p>

      <h1 className="temperature">
       {weather.main.temp}
      </h1>

      <p className="condition">
        {weather.weather[0].description}
      </p>

    </section>
  );
}

export default WeatherCard;