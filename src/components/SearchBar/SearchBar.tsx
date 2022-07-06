import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useCharacter } from "../../contexts/CharacterContext";
import { Character } from "../../types";

function SearchBar() {
  const { searchCharacters, handleClearSearch } = useCharacter();
  const [status, setStatus] = useState<Character["status"]>("unknown");
  const [name, setName] = useState<string>("");
  const [species, setSpecie] = useState<Character["species"]>("");

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-select"
            id="status"
            value={status}
            label="Status"
            onChange={(e) => setStatus(e.target.value as Character["status"])}
          >
            <MenuItem value="alive">Alive</MenuItem>
            <MenuItem value="dead">Dead</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="name"
          label="Name"
          variant="outlined"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          id="specie"
          label="Specie"
          variant="outlined"
          defaultValue={species}
          onChange={(e) => setSpecie(e.target.value)}
        />
        <ButtonGroup fullWidth>
          <Button
            onClick={() => searchCharacters({ status, name, species })}
            variant="contained"
          >
            Search
          </Button>
          <Button variant="outlined" onClick={() => handleClearSearch()}>
            Clear
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default SearchBar;
