import Mode from './Mode';
import Search from './Search';
import CLocation from './CLocation';
import './Styles/header.css';

function Header() {
  return (
    <div className="Header">
        <Mode/>
        <Search/>
        <CLocation/>
    </div>
  )
}
export default Header;