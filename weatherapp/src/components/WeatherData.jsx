import humidity from "../assets/main-icons/humidity 1.svg";
import wind from "../assets/main-icons/wind 1.svg";
import pressure from "../assets/main-icons/pressure-white 1.svg";
import visibility from "../assets/main-icons/visibility.png";

export default function WeatherData({weatherData}) {
    return (
        <div className="extra-detail">
            <div>
                <img src={humidity} alt="humidity" className="icons"></img>
                <p className="detail-value"><strong>{weatherData.humidity || 0}%</strong></p>
                <p className="detail-type">Humidity</p>
            </div>
            <div>
                <img src={wind} alt="wind" className="icons"></img>
                <p className="detail-value"><strong>{weatherData.windSpeed || 0}km/h</strong></p>
                <p className="detail-type">Wind speed</p>
            </div>
            <div>
                <img src={pressure} alt="pressure" className="icons"></img>
                <p className="detail-value"><strong>{weatherData.pressure || 0}hPa</strong></p>
                <p className="detail-type">Pressure</p>
            </div>
            <div>
                <img src={visibility} alt="visibility" className="icons"></img>
                <p className="detail-value"><strong>{weatherData.visibility}km</strong></p>
                <p className="detail-type">Visibility</p>
            </div>
        </div>
    );
}