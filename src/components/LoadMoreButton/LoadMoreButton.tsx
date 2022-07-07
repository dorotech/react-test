import { Box, Button } from "@mui/material";
import { useCharacter } from "../../contexts/CharacterContext";
import { useCustomTheme } from "../../contexts/CustomThemeContext";
import { Character } from "../../types";

interface LoadMoreButton {
  characters: Character[];
}

function LoadMoreButton({ characters }: LoadMoreButton) {
  const { handleLoadMore } = useCharacter();
  const { mode } = useCustomTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 5,
      }}
    >
      <Button
        color={mode === "light" ? "primary" : "secondary"}
        variant="contained"
        size="large"
        onClick={() => handleLoadMore(characters)}
      >
        Load More
      </Button>
    </Box>
  );
}

export default LoadMoreButton;
