import Header from './components/Header'
import Main from './components/Main1'
import Time from './components/Time';
import WeatherDetail from './components/WeatherDetail';
import { useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [skyCondition, setSkyCondition] = useState({});
  const [currentCity, setCurrentCity] = useState("");
  const [timezoneOffset, setTimezoneOffset] = useState(0);

  const getWeatherDetails = async(API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setCurrentWeather({
        temperature: Math.floor(data.main.temp),
        feelsLike: Math.floor(data.main.feels_like),
        sunrise: convertUnixToTime(data.sys.sunrise),
        sunset: convertUnixToTime(data.sys.sunset)
      });

      setSkyCondition({
        description: data.weather[0].description,
      });
      
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure
      })

      setCurrentCity(data.name);
      setTimezoneOffset(data.timezone);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  const convertUnixToTime = (unixTimestamp) => {
    if (!unixTimestamp) return "--"; // Handle undefined cases
    const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; 
    const formattedMinutes = minutes.toString().padStart(2, "0"); 

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const dark = false;
  

  return (
    <>
      <div className={`App-${dark ? 'dark' : 'light'}`}>
        <Header getWeatherDetails={getWeatherDetails}/>
        <Main/>
        <Time currentCity={currentCity} />
        <WeatherDetail currentWeather={currentWeather} skyCondition={skyCondition} weatherData={weatherData}/>
      </div>
    </>
  )
}

export default App
