import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import { Character } from "../../types";
import CustomSnackbar from "../CustomSnackbar/CustomSnackbar";
import { useCharacter } from "../../contexts/CharacterContext";
import CustomCard from "../CharacterCard/CustomCard/CustomCard";
import CustomCardHeader from "../CharacterCard/CustomCardHeader/CustomCardHeader";
import CustomCardActionArea from "../CharacterCard/CustomCardActionArea/CustomCardActionArea";
import CustomCardContent from "../CharacterCard/CustomCardContent/CustomCardContent";

interface CharacterListProps {
  characters: Character[];
}

function CharacterList({ characters }: CharacterListProps) {
  const { setToFavorites, favoritesCharacters } = useCharacter();
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  async function copyToClipboard(id: string) {
    const character = await navigator.clipboard
      .writeText(`localhost:3000/character/${id}`)
      .then(() => {
        setCopiedToClipboard(true);
      });

    return character;
  }

  function handleCloseSnackbar() {
    setCopiedToClipboard(false);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      {characters?.map((character) => {
        return (
          <CustomCard key={character.id}>
            <CustomCardHeader
              avatarName={character.name}
              titleName={character.name}
              subheader={new Intl.DateTimeFormat("pt-br", {
                day: "2-digit",
                month: "short",
                year: "2-digit",
              }).format(new Date(character.created ?? ""))}
            />
            <CustomCardActionArea
              id={character.id}
              imageUrl={character.image}
              alt={character.name}
            />
            <CardActions
              disableSpacing
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <IconButton
                aria-label="add to favorites"
                onClick={() => setToFavorites(character.id)}
              >
                <FavoriteIcon
                  color={
                    favoritesCharacters.some(
                      (favChar) => favChar.id === character.id
                    )
                      ? "success"
                      : "inherit"
                  }
                />
              </IconButton>
              <IconButton
                aria-label="copy"
                onClick={() => copyToClipboard(character.id)}
              >
                <ContentCopyIcon />
              </IconButton>
            </CardActions>
            <CustomCardContent
              gender={character.gender}
              species={character.species}
              status={character?.status}
              type={character.type}
            />
          </CustomCard>
        );
      })}
      <CustomSnackbar
        message="Copiado com sucesso!"
        open={copiedToClipboard}
        onClose={() => handleCloseSnackbar()}
        severity="success"
      />
    </Box>
  );
}

export default CharacterList;
