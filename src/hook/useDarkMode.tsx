/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';

/**
 * @brief Component for the Theme Picker which allows the user to change the theme.
 * Dark or light only.
 * @param baseTheme The base theme to start if it's the first time accessing.
 * @returns picked theme and a function to change the theme.
 */
const useDarkMode = (
  baseTheme: string = 'dark',
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [theme, setTheme] = useState(localStorage.theme || baseTheme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  const bgClass = theme === 'dark' ? 'dark-bg' : 'light-bg';
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    bgClass === 'dark-bg'
      ? (root.classList.remove('light-bg'), root.classList.add('dark-bg'))
      : (root.classList.remove('dark-bg'), root.classList.add('light-bg'));

    localStorage.setItem('theme', theme);
  }, [theme, colorTheme, bgClass]);

  return [colorTheme, setTheme];
};

export default useDarkMode;
