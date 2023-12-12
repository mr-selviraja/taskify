import { useThemeContext } from '../contexts/ThemeContext';

const useReverseTheme = () => {
  const { theme } = useThemeContext();

  return theme === 'light' ? 'dark' : 'light';
};

export default useReverseTheme;
