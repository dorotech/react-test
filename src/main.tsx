import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <CssBaseline />
    </BrowserRouter>
  </React.StrictMode>
);
