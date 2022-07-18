import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import useDarkMode from '../../hook/useDarkMode';

/**
 * @brief Component for the theme picker which calls a custom hook.
 * @returns The button to change the theme.
 */
const ThemePicker = () => {
  const [colorTheme, setTheme] = useDarkMode('dark');
  return (
    <button
      className="btn mx-1 p-2 my-1 cursor-pointer"
      type="button"
      onClick={() => setTheme(colorTheme)}
    >
      {colorTheme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </button>
  );
};

export default ThemePicker;
