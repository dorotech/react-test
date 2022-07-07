import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface CustomThemeContextData {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}
export const CustomThemeContext = createContext<CustomThemeContextData>({
  mode: "light",
  // eslint-disable-next-line @typescript-eslint/no-empty-function, prettier/prettier
  toggleColorMode: () => { },
});

interface CustomThemeProps {
  children: ReactNode;
}

export function CustomThemeProvider({ children }: CustomThemeProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#212121",
          },
          secondary: {
            main: "#00bfa5",
          },
          background: {
            default: "#303030",
          },
        },
      }),
    [mode]
  );
  return (
    <CustomThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export const useCustomTheme = () => useContext(CustomThemeContext);
