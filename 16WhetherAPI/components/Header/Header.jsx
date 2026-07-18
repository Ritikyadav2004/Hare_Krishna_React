import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        🌤️
      </div>

      <div className="title">
        <h1>Weather App</h1>
        <p>Real-Time Weather Information</p>
      </div>
    </header>
  );
}

export default Header;