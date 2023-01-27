import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
