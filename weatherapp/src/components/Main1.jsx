import { DaysForecast } from './Daysforcast.jsx';
import Time from './Time.jsx';
import WeatherDetail from './WeatherDetail.jsx';
import HourlyForecast from './Hourlyforecast.jsx';

function Main({ currentCity, timezoneOffset, currentWeather, skyCondition, weatherData }) {
  return (
    <div className="main">
      <Time currentCity={currentCity} timezoneOffset={timezoneOffset} />
      <WeatherDetail currentWeather={currentWeather} skyCondition={skyCondition} weatherData={weatherData} />
      <DaysForecast data={weatherData} />
      <HourlyForecast hourlyForecast={weatherData.hourlyForecast} />
    </div>
  );
}

export default Main;