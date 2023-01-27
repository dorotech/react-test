import { useEffect, useContext } from "react";
import { TopAppBar } from "../../components/topBar";
import axios from "axios";
import styles from "./styles.module.scss";

import { CharactersContainer } from "../characters";
import { ColorModeContext } from "../../contexts";

const HomePage = () => {
  const { mode } = useContext(ColorModeContext);

  const getCharactersList = async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character?page=2"
      );
      console.log("response", response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCharactersList();
  }, []);

  return (
    <div style={{ height: "100%" }} className={styles.container}>
      <TopAppBar />
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
    </div>
  );
};

export { HomePage };
