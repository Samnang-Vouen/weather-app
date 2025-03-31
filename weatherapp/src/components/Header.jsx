import Mode from './Mode';
import Search from './Search';
import CLocation from './CLocation';

function Header({ getWeatherDetails, isDarkMode, toggleTheme }) {
  return (
    <div className="Header">
      <Mode isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      <Search getWeatherDetails={getWeatherDetails} />
      <CLocation getWeatherDetails={getWeatherDetails} />
    </div>
  );
}

export default Header;