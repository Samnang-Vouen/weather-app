import locationIcon from "../assets/main-icons/current location-icon.png";

function CLocation({ getWeatherDetails }) {
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Geolocation success:", { lat: latitude, lon: longitude });

          // Construct API URL and fetch data
          const API_KEY = import.meta.env.VITE_API_KEY;
          const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=en`;

          getWeatherDetails(API_URL); // Fetch weather data using API URL
        },
        (error) => {
          console.error("Geolocation error:", error.message);
          alert("Unable to retrieve your location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported");
    }
  };

  return (
    <button className="location-button" onClick={handleClick}>
      <img src={locationIcon} alt="Current location icon" className="location-icon" />
      <span><b>CURRENT LOCATION</b></span>
    </button>
  );
}

export default CLocation;