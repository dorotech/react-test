import { ThemeProvider } from 'styled-components';
import { ThemeDark } from './Themes/Dark';
import { GlobalStyles } from './Themes/globals';

import { Home } from './Pages/Home';
import { useState } from 'react';

function App() {
  const [themeMode] = useState<'DARK' | 'LIGHT'>('DARK');

  return (
    <ThemeProvider theme={ThemeDark}>
      <Home />
      <GlobalStyles themeMode={themeMode} />
    </ThemeProvider>
  );
}

export default App;
