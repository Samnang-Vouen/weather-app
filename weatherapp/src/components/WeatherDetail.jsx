import CurrentWeather from "./CurrentWeather";
import WeatherData from "./WeatherData";
import Sky from "./Sky";

export default function WeatherDetail({currentWeather, skyCondition, weatherData}) {
    const isDataAvailable = 
        currentWeather && Object.keys(currentWeather).length > 0 &&
        skyCondition && Object.keys(skyCondition).length > 0 &&
        weatherData && Object.keys(weatherData).length > 0;

    return (
        <div className="detail-container">
            {isDataAvailable ? (
                <>
                    <CurrentWeather currentWeather={currentWeather} />
                    <Sky skyCondition={skyCondition} />
                    <WeatherData weatherData={weatherData} />
                </>
            ) : (
                <div className="no-data-message">
                    <h2>Weather Details</h2>
                    <p>No weather data available</p>
                </div>
            )}
        </div>
    );
}
