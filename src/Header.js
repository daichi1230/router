import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

const Header = ({width}) => {
  return (
    <header className="Header">
      <img src="/router/img/YouRockLogo.jpg" alt="YouRockLogo" />
      {width < 768 ? <FaMobileAlt />
        : width < 992 ? <FaTabletAlt />
          : <FaLaptop />}
    </header>
  )
}

export default Header