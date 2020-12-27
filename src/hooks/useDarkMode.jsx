import { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkMode';

const useDarkMode = () => {
  const { enableDarkMode, setEnableDarkMode } = useContext(DarkModeContext);

  return [enableDarkMode, setEnableDarkMode];
};

export default useDarkMode;
