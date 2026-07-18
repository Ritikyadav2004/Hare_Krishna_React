import "./SearchBar.css";

  function SearchBar({city , setCity ,fetchWeather}) {
    return (
      <section className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter city name..."
            className="search-input"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            onKeyDown={(e) => {
                      if (e.key === "Enter") {
                          fetchWeather();
                      }
                  }}
          />

          <button  onClick={fetchWeather}className="search-btn">
            Search
          </button>
        </div>
      </section>
    );
  }

export default SearchBar;

// function SearchBar({ city, setCity, fetchWeather }) {
//     return (
//         <div className="search-bar">

//             <input
//                 type="text"
//                 placeholder="Enter city..."
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                         fetchWeather();
//                     }
//                 }}
//             />

//             <button onClick={fetchWeather}>
//                 Search
//             </button>

//         </div>
//     );
// }

// export default SearchBar;