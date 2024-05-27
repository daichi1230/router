import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from './hooks/useWindowSize';
import YRLogo from './img/logo.svg';

const Header = () => {
  const { width } = useWindowSize();

  return (
    <header className="Header">
      <a href='/'><img className='logo' src={YRLogo} alt="YouRockLogo"
          height={'50px'}/></a>
      {width < 768 ? <FaMobileAlt />
        : width < 992 ? <FaTabletAlt />
          : <FaLaptop />}
    </header>
  )
}

export default Header