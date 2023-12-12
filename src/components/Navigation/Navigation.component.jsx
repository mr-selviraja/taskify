import { IoListCircleSharp } from 'react-icons/io5';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import './Navigation.styles.scss';

function Navigation({ theme }) {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <NavLink to='/' className={`fg-${theme}`}>
            <IoListCircleSharp />
          </NavLink>
        </li>

        <li>
          <NavLink to='/done' className={`fg-${theme}`}>
            <IoIosCheckmarkCircle />
          </NavLink>
        </li>

        <li>
          <NavLink to='/important' className={`fg-${theme}`}>
            <RiErrorWarningFill />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
