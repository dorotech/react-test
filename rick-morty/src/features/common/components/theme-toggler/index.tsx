import { Moon, SunDim } from 'phosphor-react';
import { useEffect, useReducer } from 'react';
import { Button } from '../button';

type TTheme = 'dark' | 'light';

const INITIAL_STATE: TTheme = 'dark';

const saveThemeOnLocalStorage = (theme: string) => {
  window.localStorage.setItem('REACT_QUERY_APP_THEME', theme);
};

const getThemeOnLocalStorage = () => {
  return window.localStorage.getItem('REACT_QUERY_APP_THEME') as TTheme | null;
};

const themeReducer = (state: TTheme, theme: TTheme) => {
  saveThemeOnLocalStorage(theme);

  const html = window.document.querySelector('html');

  if (html) {
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  return theme;
};

export function ThemeToggler() {
  const [theme, setTheme] = useReducer(themeReducer, INITIAL_STATE);

  useEffect(() => {
    const savedTheme = getThemeOnLocalStorage();
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button aria-label="Change app's theme." onClick={handleToggleTheme}>
      {theme === 'dark' && (
        <Moon data-testid="dark" size={26} weight="duotone" className="text-amber-500" />
      )}
      {theme === 'light' && (
        <SunDim data-testid="light" size={26} weight="duotone" className="text-amber-500" />
      )}
    </Button>
  );
}
