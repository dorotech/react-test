
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Body = () => {
  const [characters, setCharacters] = useState([]);

  const getApi = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();

      console.log(data.results);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Grid container spacing={3} padding={3} paddingX={2}>
      {characters.map((character) => (
        <Grid item lg={3} md={4} sm={4} xs={12}>
          <Box key={character.id} borderRadius={2}>
            <img style={{ width: "100%" }} src={character.image} />
          </Box>
          <Typography style={{ fontWeight: 600 }} gutterBottom variant="body1">
            Nome: {character.name}
          </Typography>
          <Typography>Status: {character.status}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};
