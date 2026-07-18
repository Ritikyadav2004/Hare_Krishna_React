import "./WeatherDetails.css";

function WeatherDetails({weather}) {
  return (
    <section className="weather-details">

      <div className="detail-card">
        <h3>{weather.weather[0].main}</h3>
        <p>{weather.main.humidity}%</p>
      </div>

      <div className="detail-card">
        <h3>🌬 Wind Speed</h3>
        <p>{weather.wind.speed} m/s</p>
      </div>

      <div className="detail-card">
        <h3>🌡 Pressure</h3>
        <p>{weather.main.pressure} hPa</p>
      </div>

      <div className="detail-card">
        <h3>👁 Visibility</h3>
        <p>{weather.visibility / 1000} km</p>
      </div>

    </section>
  );
}

export default WeatherDetails;