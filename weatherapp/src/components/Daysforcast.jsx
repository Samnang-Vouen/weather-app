export function DaysForecast({ data }) {
  const forecastData = data.forecast || [];

  return (
    <div className="five-days-forecast">
      <h2>5 Days Forecast</h2>
      {forecastData.length > 0 ? (
        forecastData.map((day, index) => (
          <div key={index} className="forecast-item">
            <img src={day.icon} alt="weather icon" className="weather-icon" />
            <div className="temperature">{day.temp}°C</div>
            <div className="date">{day.date}</div>
          </div>
        ))
      ) : (
        <p>No forecast data available</p>
      )}
    </div>
  );
}