import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useCustomTheme } from "../contexts/CustomThemeContext";

function Layout() {
  const { mode } = useCustomTheme();
  return (
    <>
      <Navbar />
      <Box
        bgcolor={mode === "light" ? "secondary.main" : "primary.dark"}
        component="main"
      >
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
