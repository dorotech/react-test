import { Moon, SunDim } from 'phosphor-react';
import { useReducer } from 'react';
import { Button } from '../button';

type TTheme = 'dark' | 'light';

const INITIAL_STATE: TTheme = 'dark';

const themeReducer = (state: TTheme) => {
  const newState = state === 'dark' ? 'light' : 'dark';

  const html = window.document.querySelector('html');

  if (html) {
    if (newState === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  return newState;
};

export function ThemeToggler() {
  const [theme, toggleTheme] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <Button aria-label="Change app's theme." onClick={toggleTheme}>
      {theme === 'dark' && (
        <Moon data-testid="dark" size={26} weight="duotone" className="text-amber-500" />
      )}
      {theme === 'light' && (
        <SunDim data-testid="light" size={26} weight="duotone" className="text-amber-500" />
      )}
    </Button>
  );
}
