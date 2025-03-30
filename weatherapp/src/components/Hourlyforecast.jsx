import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure this is imported

function HourlyForecast({ hourlyForecast }) {
    // Define the maximum wind speed and rotation for mapping
  const maxWindSpeed = 300; // Covers global wind speeds, including extreme events (in km/h)
  const maxRotation = 360; // Full rotation in degrees
  return (
    <div className="hourly-forecast-container">
      <h2>Hourly Forecast:</h2>
      <div className="hourly-forecast-items">
        {!hourlyForecast || hourlyForecast.length === 0 ? (
          <p>No forecast data available.</p>
        ) : (
          hourlyForecast.map((hour, index) => {
            // Calculate rotation based on windSpeed
            const rotationAngle = (hour.windSpeed / maxWindSpeed) * maxRotation;
            const adjustedRotation = -45 + rotationAngle; // Adjust for icon's default orientation

            return (
              <div key={index} className="hourly-forecast-item">
                <div className="hourly-time">{hour.time}</div>
                <img
                  src={hour.icon}
                  alt="Weather icon"
                  className="hourly-icon"
                />
                <div className="hourly-temp">{hour.temp}°C</div>
                <div className="direction">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="50" 
                        height="50" 
                        fill="currentColor" 
                        className="bi bi-cursor-fill" 
                        viewBox="0 0 16 16"
                        style={{ transform: `rotate(${adjustedRotation}deg)`, color: '27548A'}}
                        >
                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                    </svg>
                </div>
                <div className="speed">
                    {hour.windSpeed}Km/h
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default HourlyForecast;