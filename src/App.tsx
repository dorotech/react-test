import { ThemeProvider } from 'styled-components';
import { ThemeDark } from './Themes/Dark';
import { ThemeLight } from './Themes/Light';
import { GlobalStyles } from './Themes/globals';

import { Home } from './Pages/Home';
import { useState } from 'react';

function App() {
  const [themeMode, setThemeMode] = useState<'DARK' | 'LIGHT'>('DARK');

  function alterTheme() {
    setThemeMode((oldState) => (oldState === 'DARK' ? 'LIGHT' : 'DARK'));
  }

  return (
    <ThemeProvider theme={themeMode === 'DARK' ? ThemeDark : ThemeLight}>
      <Home
        alterTheme={alterTheme}
        darkModeIsActived={themeMode === 'DARK' ? true : false}
      />
      <GlobalStyles themeMode={themeMode} />
    </ThemeProvider>
  );
}

export default App;
