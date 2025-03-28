import Header from './components/Header'
import Main from './components/Main1'
import Time from './components/Time';
import WeatherDetail from './components/WeatherDetail';
import { useState } from 'react';
import clear from './assets/weather-icons/clear 1.svg';
import clouds from './assets/weather-icons/clouds 2.svg';
import drizzle from './assets/weather-icons/drizzle 2.svg';
import haze from './assets/weather-icons/haze.png';
import mist from './assets/weather-icons/mist 2.svg';
import rain from './assets/weather-icons/rain 2.svg';
import snow from './assets/weather-icons/snow.png';
import thunderstorm from './assets/weather-icons/thunderstorm.png';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [skyCondition, setSkyCondition] = useState({});
  const [currentCity, setCurrentCity] = useState("");
  const [timezoneOffset, setTimezoneOffset] = useState(0);

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": clouds,
    "02n": clouds,
    "03d": clouds,
    "03n": clouds,
    "50d": mist,
    "50n": mist,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "04d": drizzle,
    "04n": drizzle
  }

  const getWeatherDetails = async(API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      const icons = allIcons[data.weather[0].icon] || clear;
      setCurrentWeather({
        temperature: Math.floor(data.main.temp),
        feelsLike: Math.floor(data.main.feels_like),
        sunrise: convertUnixToTime(data.sys.sunrise, data.timezone),
        sunset: convertUnixToTime(data.sys.sunset, data.timezone)
      });

      setSkyCondition({
        description: data.weather[0].description,
        icon: icons
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
  const convertUnixToTime = (unixTimestamp, timezoneOffset) => {
    if (!unixTimestamp) return "--"; // Handle undefined cases
    const utcTime = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
    const localTime = new Date(utcTime.getTime() + timezoneOffset * 1000);
    
    const hours = localTime.getUTCHours(); // Get the correct local hour
    const minutes = localTime.getUTCMinutes(); // Get the correct local minutes
    const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;

    return formattedTime;
  };

  const dark = false;
  

  return (
    <>
      <div className={`App-${dark ? 'dark' : 'light'}`}>
        <Header getWeatherDetails={getWeatherDetails}/>
        <Main/>
        <Time currentCity={currentCity} timezoneOffset={timezoneOffset}/>
        <WeatherDetail currentWeather={currentWeather} skyCondition={skyCondition} weatherData={weatherData}/>
      </div>
    </>
  )
}

export default App
