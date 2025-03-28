import Mode from './Mode';
import Search from './Search';
import CLocation from './CLocation';
import './Styles/header.css';

function Header({getWeatherDetails}) {

  return (
    <div className="Header">
        <Mode/>
        <Search getWeatherDetails={getWeatherDetails}/>
        <CLocation/>
    </div>
  )
}
export default Header;