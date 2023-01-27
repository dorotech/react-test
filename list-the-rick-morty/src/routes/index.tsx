import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

export const AppRoutes = () => {
  const { mudarTema } = useAppThemeContext();

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={mudarTema}>Dark mode</Button>} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
