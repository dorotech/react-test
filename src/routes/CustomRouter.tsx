import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function CustomRouter() {
  return (
    <Routes>
      <Route path="/" caseSensitive element={<Home />} />
    </Routes>
  );
}

export default CustomRouter;
