import { useState } from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import './Header.styles.scss';

function Header({ theme, toggleTheme }) {
  console.log('THEME IN HEADER: ', theme);

  return (
    <header className={`header fg-${theme}`}>
      <h1 className='header__logo font-accent'>TASKIFY</h1>

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
