import { useEffect, useContext, useState } from "react";
import { TopAppBar } from "../../components/topBar";
import axios from "axios";
import styles from "./styles.module.scss";
import { CharactersContainer } from "../characters";
import { ColorModeContext } from "../../contexts";
import { LoadingIcon } from "../../components/loading";

const HomePage = () => {
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState("idle");

  const getCharactersList = async () => {
    try {
      setLoading("loading");
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character?page=2"
      );
      setLoading("loaded");
      setCharacterList(response.data.results);
    } catch (err) {
      setLoading("error");
      console.log(err);
    }
  };

  useEffect(() => {
    getCharactersList();
  }, []);

  const { mode } = useContext(ColorModeContext);

  return (
    <div style={{ height: "100%" }} className={styles.container}>
      <TopAppBar />
      {loading === "loading" ? (
        <LoadingIcon />
      ) : (
        <div
          className={styles.page_info}
          style={{
            gridArea: "characters",
            margin: "24px",
            background: mode === "light" ? "#bbbdd6" : "#36385a",
            color: mode === "light" ? "black" : "white",
          }}
        >
          <div style={{ gridArea: "filters" }}>Filtros</div>
          <CharactersContainer />
        </div>
      )}
    </div>
  );
};

export { HomePage };
