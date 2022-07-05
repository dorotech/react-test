import { Container } from "@mui/material";
import CharacterFavoriteList from "../components/CharacterFavoriteList/CharacterFavoriteList";
import { useCharacter } from "../contexts/CharacterContext";

function CharacterFavorite() {
  const { favoritesCharacters } = useCharacter();

  return (
    <Container disableGutters maxWidth={false}>
      <CharacterFavoriteList favoriteCharacters={favoritesCharacters} />
    </Container>
  );
}

export default CharacterFavorite;
