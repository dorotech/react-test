import { createContext, useCallback, useMemo, useState, useContext } from 'react';
import { ThemeProvider } from '@mui/system';
import { DarkTheme, LightTheme } from '../themes';
import { Box } from '@mui/material';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  mudarTema: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

interface IAppThemeProviderProps {
  children: React.ReactNode
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const mudarTema = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === 'light' ? 'dark' : 'light'
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, mudarTema: mudarTema }}>
      <ThemeProvider theme={theme}>
        <Box width={'100%'} height={'100%'} bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};


