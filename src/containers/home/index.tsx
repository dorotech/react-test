import { useContext } from "react";
import { TopAppBar } from "../../components/topBar";
import styles from "./styles.module.scss";
import { CharactersContainer } from "../characters";
import { ColorModeContext } from "../../contexts";
import { Box } from "@mui/material";

const HomePage = () => {
  const { mode } = useContext(ColorModeContext);

  return (
    <Box className={styles.container}>
      <TopAppBar />
      <Box
        className={`${styles.page_info} ${
          mode !== "light" && styles.dark_mode
        }`}
      >
        <CharactersContainer />
      </Box>
    </Box>
  );
};

export { HomePage };
