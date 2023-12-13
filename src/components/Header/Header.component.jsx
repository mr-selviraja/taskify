import { BsSun, BsMoonStars } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Header.styles.scss';

function Header({ theme, toggleTheme }) {
  return (
    <header className={`header fg-${theme}`}>
      <Link to='/'>
        <h1 className='header__logo font-accent'>TASKIFY</h1>
      </Link>

      <button
        onClick={() => toggleTheme()}
        className={`btn btn__rounded fg-${theme}`}
      >
        {theme === 'dark' ? <BsSun /> : <BsMoonStars />}
      </button>
    </header>
  );
}

export default Header;
