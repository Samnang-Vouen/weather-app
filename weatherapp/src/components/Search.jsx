import React, { useState } from "react";
import searchIcon from "../assets/main-icons/search 1.svg"; // Import the image

function Search({ getWeatherDetails }) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [city, setCity] = useState(""); // State to control the input value

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() === "") return; // Prevent empty searches
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    getWeatherDetails(API_URL); // Fetch weather details for the searched city
    setCity(""); // Clear the input after search
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <div>
            <img
                src={searchIcon} // Use the imported image
                alt="Search icon" // Descriptive alt text for accessibility
                className="search-icon" // Add a class for styling
            />
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search your city"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update state on input change
        />
      </form>
    </div>
  );
}

export default Search;