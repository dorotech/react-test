import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Body } from "./shared/components/body/Body";
import { Header } from "./shared/components/header/Header";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Header />
        <Body />
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
};
