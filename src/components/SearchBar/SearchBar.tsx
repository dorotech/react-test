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
import { useCustomTheme } from "../../contexts/CustomThemeContext";
import { CharacterSearch } from "../../types";

function SearchBar() {
  const { searchCharacters } = useCharacter();
  const { mode } = useCustomTheme();

  const [status, setStatus] = useState<CharacterSearch["status"]>("");
  const [name, setName] = useState<CharacterSearch["name"]>("");
  const [species, setSpecie] = useState<CharacterSearch["species"]>("");

  const speciesOptions = [
    "Animal",
    "Humanoid",
    "Robot",
    "Disease",
    "unknown",
    "Human",
    "Poopybutthole",
    "Alien",
    "Cronenberg",
    "Mythological Creature",
  ];

  function handleClearSearch() {
    setStatus("");
    setName("");
    setSpecie("");
    searchCharacters({ name: "", species: "", status: "" });
  }

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
        <TextField
          id="name"
          label="Name"
          color={mode === "light" ? "primary" : "secondary"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel
            color={mode === "light" ? "primary" : "secondary"}
            id="status-label"
          >
            Status
          </InputLabel>
          <Select
            labelId="status-select"
            id="status"
            value={status}
            label="Status"
            onChange={(e) =>
              setStatus(e.target.value as CharacterSearch["status"])
            }
          >
            <MenuItem value="alive">Alive</MenuItem>
            <MenuItem value="dead">Dead</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
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
        <FormControl fullWidth>
          <InputLabel
            color={mode === "light" ? "primary" : "secondary"}
            id="species-label"
          >
            Species
          </InputLabel>
          <Select
            labelId="species-select"
            id="species"
            value={species}
            label="Species"
            onChange={(e) =>
              setSpecie(e.target.value as CharacterSearch["species"])
            }
          >
            {speciesOptions.map((specie) => (
              <MenuItem key={specie} value={specie}>
                {specie}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <ButtonGroup fullWidth>
          <Button
            onClick={() => searchCharacters({ status, name, species })}
            variant="contained"
            color={mode === "light" ? "primary" : "secondary"}
          >
            Search
          </Button>
          <Button
            color={mode === "light" ? "primary" : "secondary"}
            variant="outlined"
            onClick={() => handleClearSearch()}
          >
            Clear
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default SearchBar;
