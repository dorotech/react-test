import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { ColorModeContext } from "../../contexts";
import styles from "./styles.module.scss";

const TopAppBar = () => {
  const { colorMode, mode } = React.useContext(ColorModeContext);

  const handleSwitchChange = () => {
    colorMode.toggleColorMode();
  };

  return (
    <AppBar
      component="nav"
      position="static"
      className={`${styles.container} ${mode !== "light" && styles.dark_mode}`}
    >
      <Typography className={styles.typography}>Rick e Morty Wiki</Typography>
      <FormGroup className={styles.switch_contaier}>
        <FormControlLabel
          control={
            <Switch
              checked={mode === "light"}
              onChange={handleSwitchChange}
              aria-label="login switch"
            />
          }
          label={mode === "light" ? "Light Mode" : "Dark Mode"}
        />
      </FormGroup>
    </AppBar>
  );
};

export { TopAppBar };
