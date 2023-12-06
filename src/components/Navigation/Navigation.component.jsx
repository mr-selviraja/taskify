import { IoListCircleSharp } from 'react-icons/io5';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import './Navigation.styles.scss';

function Navigation() {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <a href='#'>
            <IoListCircleSharp />
          </a>
        </li>

        <li>
          <a href='#'>
            <IoIosCheckmarkCircle />
          </a>
        </li>

        <li>
          <a href='#'>
            <RiErrorWarningFill />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
