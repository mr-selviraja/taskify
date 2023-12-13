import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';

function Page404() {
  const { theme } = useThemeContext();
  const navigate = useNavigate();

  // Method to go back by given number of times
  const goBack = (numOfPagesToGoBack) => {
    navigate(numOfPagesToGoBack);
  };

  return (
    <div className={`page-404 bg-${theme}`}>
      <div className='page-404__body'>
        <img src='/assets/images/page-404.svg' alt='404 illustration' />

        <h2 className='text-primary font-accent'>Page not Found!</h2>

        <button
          onClick={() => goBack(-1)}
          className='btn btn__rect btn__rounded btn__light'
        >
          Go Back!
        </button>
      </div>
    </div>
  );
}

export default Page404;
