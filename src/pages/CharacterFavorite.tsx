import { Box, CardMedia, Container, Typography } from "@mui/material";
import CharacterFavoriteList from "../components/CharacterFavoriteList/CharacterFavoriteList";
import { useCharacter } from "../contexts/CharacterContext";
// eslint-disable-next-line import/no-unresolved
import noFavoritesImage from "../../public/assets/noFavorites.jpeg";

function CharacterFavorite() {
  const { favoritesCharacters } = useCharacter();

  return (
    <Container sx={{ minHeight: "100vh" }} disableGutters maxWidth={false}>
      {favoritesCharacters !== undefined && favoritesCharacters.length !== 0 ? (
        <CharacterFavoriteList favoriteCharacters={favoritesCharacters} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            flexDirection: "column",
            bgcolor: "black",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Dokdo', cursive",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "white",
              textOverflow: "ellipsis",
            }}
            variant="h2"
          >
            PEACE AMONG WORLDS
          </Typography>
          <CardMedia
            component="img"
            image={noFavoritesImage}
            sx={{
              maxWidth: 236,
              maxHeight: 314,
              alignSelf: "center",
            }}
          />
        </Box>
      )}
    </Container>
  );
}

export default CharacterFavorite;
