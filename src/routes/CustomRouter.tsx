import { Route, Routes } from "react-router-dom";
import CharacterById from "../pages/CharacterById";
import Home from "../pages/Home";
import Layout from "../pages/Layout";

function CustomRouter() {
  return (
    <Routes>
      <Route path="/" caseSensitive element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/character" caseSensitive element={<Home />} />
        <Route
          path="/character/:id"
          caseSensitive
          element={<CharacterById />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There&apos;s nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

export default CustomRouter;
