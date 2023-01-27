import { useMemo, useState } from "react";
import { HomePage } from "./containers/home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "./contexts";

const App = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: string) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ colorMode, mode }}>
      <ThemeProvider theme={theme}>
        <div
          style={{
            background: mode === "light" ? "#dddeeb" : "#484b78",
            height: "100%",
          }}
        >
          <HomePage />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
