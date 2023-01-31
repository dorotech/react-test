import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { ColorModeContext } from "../../contexts";

const TopAppBar = () => {
  const { colorMode, mode } = React.useContext(ColorModeContext);

  const handleSwitchChange = () => {
    colorMode.toggleColorMode();
  };

  return (
    <AppBar
      component="nav"
      position="static"
      style={{
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: mode === "light" ? "#5b5f97" : "#2d2f4b",
        gridArea: "topbar",
      }}
    >
      <Typography style={{ display: "flex", alignItems: "center" }}>
        Rick e Morty Wiki
      </Typography>
      <FormGroup style={{ justifyContent: "center" }}>
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
