import { useEffect, useContext, useState } from "react";
import { TopAppBar } from "../../components/topBar";
import axios from "axios";
import styles from "./styles.module.scss";
import { CharactersContainer } from "../characters";
import { ColorModeContext } from "../../contexts";

const HomePage = () => {
  const { mode } = useContext(ColorModeContext);

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
        <CharactersContainer />
      </div>
    </div>
  );
};

export { HomePage };
