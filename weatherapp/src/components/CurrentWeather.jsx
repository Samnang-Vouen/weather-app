import sunrise from "../assets/main-icons/sunrise-white 1.svg";
import sunset from "../assets/main-icons/sunset-white 1.svg";

export default function CurrentWeather({currentWeather}) {
    return (
        <div className="main-detail">         
            <div>
                <p id="temp">{currentWeather.temperature}°C</p>
                <div id="feel-like">
                    <span style={{ fontSize: "20px" }}><strong>Feels like: </strong></span>
                    <span style={{ fontSize: "32px" }}><strong> {currentWeather.feelsLike}°C</strong></span>
                </div>
            </div>
            <div>
                <div className="sunrise">
                    <div id="sunrise-img">
                        <img src={sunrise} alt="sunrise" />
                    </div>
                    <div id="sunrise-text">
                        <p className="text">Sunrise</p>
                        <p className="time">{currentWeather.sunrise}</p>
                    </div>
                </div>
                <div className="sunset">
                    <div id="sunset-img">
                        <img src={sunset} alt="sunset" />
                    </div>
                    <div id="sunrise-text">
                        <p className="text">Sunset</p>
                        <p className="time">{currentWeather.sunset}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}