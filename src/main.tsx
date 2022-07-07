import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CharacterProvider } from "./contexts/CharacterContext";
import App from "./App";
import "./main.css";
import { CustomThemeProvider } from "./contexts/CustomThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CharacterProvider>
        <CustomThemeProvider>
          <App />
        </CustomThemeProvider>
        <CssBaseline />
      </CharacterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
