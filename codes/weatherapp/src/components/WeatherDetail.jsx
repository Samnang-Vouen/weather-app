import CurrentWeather from "./CurrentWeather";
import WeatherData from "./WeatherData";
import Sky from "./Sky";

export default function WeatherDetail({currentWeather, skyCondition, weatherData}) {

    return (
        <div className="detail-container">
            <CurrentWeather currentWeather={currentWeather}/>
            <Sky skyCondition={skyCondition}/>
            <WeatherData weatherData={weatherData}/>
        </div>
    );
}
