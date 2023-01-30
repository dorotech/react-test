import { Moon, SunDim } from 'phosphor-react';
import { useReducer } from 'react';
import { Button } from '../button';

export function ThemeToggler() {
  const [theme, toggleTheme] = useReducer(
    (state) => (state === 'light' ? 'dark' : 'light'),
    'light' as 'light' | 'dark'
  );

  return (
    <Button aria-label="Change app's theme." onClick={toggleTheme}>
      {theme === 'dark' && <Moon size={26} weight="duotone" className="text-amber-500" />}
      {theme === 'light' && <SunDim size={26} weight="duotone" className="text-amber-500" />}
    </Button>
  );
}
