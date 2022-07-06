import { Box, Container } from "@mui/material";
import CharacterFavoriteList from "../components/CharacterFavoriteList/CharacterFavoriteList";
import { useCharacter } from "../contexts/CharacterContext";

function CharacterFavorite() {
  const { favoritesCharacters } = useCharacter();

  return (
    <Container disableGutters maxWidth={false}>
      {favoritesCharacters !== undefined && favoritesCharacters.length !== 0 ? (
        <CharacterFavoriteList favoriteCharacters={favoritesCharacters} />
      ) : (
        <Box>Você não possui nenhum personagem favorito</Box>
      )}
    </Container>
  );
}

export default CharacterFavorite;
