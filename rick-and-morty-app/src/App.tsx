import { useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Router from './Router';

import Header from './components/Header';

import GlobalStyle from './styles/global';
import themes from './styles/themes';

type Theme = 'light' | 'dark';

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Header
          onToggleTheme={handleToggleTheme}
          selectedTheme={theme}
        />
        <Router />
      </ThemeProvider>

    </BrowserRouter>
  );
}
