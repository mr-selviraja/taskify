import { useState } from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import './Header.styles.scss';

function Header() {
  const [theme, setTheme] = useState('light');

  // Method to toggle theme
  const toggleTheme = () => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className='header'>
      <h1 className='header__logo font-accent'>TASKIFY</h1>

      <button onClick={toggleTheme} className='btn btn__rounded'>
        {theme === 'dark' ? <BsSun /> : <BsMoonStars />}
      </button>
    </header>
  );
}

export default Header;
