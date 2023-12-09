import { IoListCircleSharp } from 'react-icons/io5';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import './Navigation.styles.scss';

function Navigation({ theme }) {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <a href='#' className={`fg-${theme}`}>
            <IoListCircleSharp />
          </a>
        </li>

        <li>
          <a href='#' className={`fg-${theme}`}>
            <IoIosCheckmarkCircle />
          </a>
        </li>

        <li>
          <a href='#' className={`fg-${theme}`}>
            <RiErrorWarningFill />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
