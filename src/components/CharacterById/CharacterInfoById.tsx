import { Box, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import EpisodeList from "../EpisodeList/EpisodeList";
import { useCharacter } from "../../contexts/CharacterContext";
import { Character } from "../../types";

function CharacterInfoById() {
  const { getCharacterById } = useCharacter();
  const { id } = useParams();
  const [character, setCharacter] = useState<Character>();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const getCharacterInfoById = await getCharacterById(id!);
      setCharacter(getCharacterInfoById);
    })();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
        alignItems: "flex-start",
        justifyContent: "space-between",
        minHeight: "100vh",
        pt: 4,
        px: { xs: 0.5, sm: 1, lg: 2 },
        gap: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 300,
          display: "flex",
          flexDirection: "column",
          alignSelf: { xs: "center", sm: "flex-start", lg: "flex-start" },
          gap: 2,
          flex: "2 0 auto",
        }}
      >
        <Grid container flexDirection="column">
          <Grid item xs>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.2,
              }}
            >
              {character?.name}
            </Typography>
          </Grid>
          <Grid item>
            <CardMedia
              image={character?.image}
              component="img"
              height={300}
              alt={character?.name}
            />
          </Grid>
        </Grid>
        <Grid container columnSpacing={2} sx={{ px: 0.5 }}>
          <Grid item xs>
            <Typography variant="h6">Status:</Typography>
            <Typography
              variant="subtitle1"
              sx={{
                display: "flex",
                gap: "0.2rem",
              }}
            >
              {character?.status}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">Species:</Typography>
            <Typography
              variant="subtitle1"
              sx={{
                display: "flex",
                gap: "0.2rem",
              }}
            >
              {character?.species}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">Type:</Typography>
            <Typography
              variant="subtitle1"
              sx={{
                display: "flex",
                gap: "0.2rem",
              }}
            >
              {character?.type !== "" ? character?.type : "-"}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">Gender:</Typography>
            <Typography
              variant="subtitle1"
              sx={{
                display: "flex",
                gap: "0.2rem",
              }}
            >
              {character?.species}
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ minWidth: 300 }}>
          <Grid
            container
            direction={{ xs: "column", sm: "row" }}
            sx={{ px: 0.5 }}
          >
            <Grid item xs>
              <Typography variant="h6">Origin:</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  display: "flex",
                  gap: "0.2rem",
                }}
              >
                {character?.origin?.name}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6">Location:</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  display: "flex",
                  gap: "0.2rem",
                }}
              >
                {character?.location?.name}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      {/* vai mostrar as informações do episódio */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "column", md: "row" },
          flex: "1 1 auto",
        }}
      >
        <Box
          sx={{
            flex: "2 0 auto",
          }}
        >
          <Outlet />
        </Box>
        <Box sx={{ flex: "1 1 auto" }}>
          <EpisodeList episodes={character?.episode} />
        </Box>
      </Box>
    </Box>
  );
}

export default CharacterInfoById;
