import { Container } from "@mui/material";
import CharacterList from "../components/CharacterList/CharacterList";
import { useCharacter } from "../contexts/CharacterContext";

function Home() {
  const { characters } = useCharacter();

  return (
    <Container disableGutters maxWidth={false}>
      <CharacterList characters={characters} />
    </Container>
  );
}

export default Home;
