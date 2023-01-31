import { useMemo, useState } from "react";
import { HomePage } from "./containers/home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "./contexts";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";

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
        <Box
          className={`${styles.app_container} ${
            mode !== "light" && styles.dark_mode
          }`}
        >
          <HomePage />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
