import Header from './components/Header'
import Main from './components/Main1'
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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

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

  const getWeatherDetails = async (API_URL) => {
    try {
      // Fetch current weather data
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
  
      const icons = allIcons[data.weather[0].icon] || clear;
      setCurrentWeather({
        temperature: Math.floor(data.main.temp),
        feelsLike: Math.floor(data.main.feels_like),
        sunrise: convertUnixToTime(data.sys.sunrise, data.timezone),
        sunset: convertUnixToTime(data.sys.sunset, data.timezone),
      });
  
      setSkyCondition({
        description: data.weather[0].description,
        icon: icons,
      });
  
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure,
        visibility: data.visibility / 1000
      });
  
      setCurrentCity(data.name);
      setTimezoneOffset(data.timezone);
  
      // Fetch 5-day forecast
      const lat = data.coord.lat;
      const lon = data.coord.lon;
      const API_KEY = import.meta.env.VITE_API_KEY; // Use the same API key as current weather
      const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const forecastResponse = await fetch(forecastApiUrl);
      const forecastData = await forecastResponse.json();
  
      // Process forecast data for daily forecast (existing code)
      const dailyForecasts = [];
      const seenDays = new Set();
      
      forecastData.list.forEach((entry) => {
        const date = new Date(entry.dt * 1000);
        const dayKey = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit' });
  
        if (!seenDays.has(dayKey) && dailyForecasts.length < 5) {
          seenDays.add(dayKey);
          dailyForecasts.push({
            date: dayKey,
            temp: Math.round(entry.main.temp),
            icon: allIcons[entry.weather[0].icon] || clear,
          });
        }
      });
  
      // Process hourly data (next 5 entries for hourly forecast)
      const hourlyForecast = forecastData.list.slice(0, 5).map(item => ({
        time: new Date(item.dt * 1000).getHours() + ':00',
        temp: Math.round(item.main.temp),
        windSpeed: Math.round(item.wind.speed * 3.6), // Convert m/s to km/h
        icon: allIcons[item.weather[0].icon] || clear
      }));
  
      setWeatherData((prev) => ({
        ...prev,
        forecast: dailyForecasts,
        hourlyForecast: hourlyForecast,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure,
      }));
      console.log(data);
  
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };
  const convertUnixToTime = (unixTimestamp, timezoneOffset) => {
    if (!unixTimestamp) return "--"; // Handle undefined cases
    const utcTime = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
    const localTime = new Date(utcTime.getTime() + timezoneOffset * 1000);
    
    const hours = localTime.getUTCHours(); // Get the correct local hour
    const minutes = localTime.getUTCMinutes(); // Get the correct local minutes
    const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;

    return formattedTime;
  };
  
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <>
      <div className={isDarkMode ? 'App-dark' : 'App-light'}>
        <Header getWeatherDetails={getWeatherDetails} isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
        <Main
          currentCity={currentCity}
          timezoneOffset={timezoneOffset}
          currentWeather={currentWeather}
          skyCondition={skyCondition}
          weatherData={weatherData}
        />
      </div>
    </>
  )
}

export default App
