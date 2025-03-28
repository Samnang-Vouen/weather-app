import humidity from "../assets/main-icons/humidity 1.svg";
import wind from "../assets/main-icons/wind 1.svg";
import pressure from "../assets/main-icons/pressure-white 1.svg";
import uv from "../assets/main-icons/uv-white 1.svg";

export default function WeatherData({weatherData}) {
    return (
        <div className="extra-detail">
            <div>
                <img src={humidity} alt="humidity" className="icons"></img>
                <p className="detail-value"><strong>{weatherData.humidity}%</strong></p>
                <p className="detail-type">Humidity</p>
            </div>
            <div>
                <img src={wind} alt="wind" className="icons"></img>
                <p className="detail-value"><strong>{weatherData.windSpeed}km/h</strong></p>
                <p className="detail-type">Wind speed</p>
            </div>
            <div>
                <img src={pressure} alt="pressure" className="icons"></img>
                <p className="detail-value"><strong>{weatherData.pressure}hPa</strong></p>
                <p className="detail-type">Pressure</p>
            </div>
            <div>
                <img src={uv} alt="uv" className="icons"></img>
                <p className="detail-value"><strong>8</strong></p>
                <p className="detail-type">UV</p>
            </div>
        </div>
    );
}