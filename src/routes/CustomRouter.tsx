import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CharacterById from "../pages/CharacterById/CharacterById";
import CharacterFavorite from "../pages/CharacterFavorite";
import EpisodeById from "../pages/CharacterById/EpisodeById";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";

function CustomRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/character");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="character" element={<Home />} />
        <Route path="character/:id" element={<CharacterById />}>
          <Route path="episode/:episodeId" element={<EpisodeById />} />
        </Route>
        <Route path="/favorites" element={<CharacterFavorite />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default CustomRouter;
