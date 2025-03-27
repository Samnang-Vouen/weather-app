import Header from './components/header'
import Main from './components/Main1'
import Time from './components/Time';
import WeatherDetail from './components/WeatherDetail';
import { useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [skyCondition, setSkyCondition] = useState({});
  const getWeatherDetails = async(API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setCurrentWeather({
        temperature: Math.floor(data.main.temp),
        feelsLike: Math.floor(data.main.feels_like)
      });

      setSkyCondition({
        description: data.weather[0].description
      });
      
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure
      })
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  const dark = false;
  

  return (
    <>
      <div className={`App-${dark ? 'dark' : 'light'}`}>
        <Header getWeatherDetails={getWeatherDetails}/>
        <Main/>
        <Time />
        <WeatherDetail currentWeather={currentWeather} skyCondition={skyCondition} weatherData={weatherData}/>
      </div>
    </>
  )
}

export default App
