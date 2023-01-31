import React, { useContext } from "react";
import { Box } from "@mui/system";
import { ColorModeContext } from "../../contexts";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import styles from "./styles.module.scss";

interface SearchInputProps {
  nameToSearch: string;
  setNameToSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ nameToSearch, setNameToSearch }: SearchInputProps) => {
  const { mode } = useContext(ColorModeContext);

  return (
    <Box
      className={`${styles.container} ${
        mode !== "light" && styles.container_dark_mode
      }`}
    >
      <SearchIcon />
      <InputBase
        placeholder="Por nome..."
        inputProps={{ "aria-label": "search" }}
        style={{ color: mode === "light" ? "black" : "white" }}
        value={nameToSearch}
        onChange={(e) => setNameToSearch(e.target.value)}
      />
    </Box>
  );
};

export { SearchInput };
