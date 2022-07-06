import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList/CharacterList";
import CustomSnackbar from "../components/CustomSnackbar/CustomSnackbar";
import SearchBar from "../components/SearchBar/SearchBar";
import { useCharacter } from "../contexts/CharacterContext";

function Home() {
  const { characters, searchError, clearSearchError } = useCharacter();
  const [open, setOpen] = useState(false);

  function handleSnack() {
    setOpen(false);
    clearSearchError();
  }

  useEffect(() => {
    if (searchError !== "") {
      setOpen(true);
    }
  }, [searchError]);

  return (
    <Container disableGutters maxWidth={false}>
      <SearchBar />
      <CharacterList characters={characters} />
      <CustomSnackbar
        message={searchError}
        severity="error"
        open={open}
        onClose={() => handleSnack()}
      />
    </Container>
  );
}

export default Home;
