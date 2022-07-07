import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Divider } from "@mui/material";
import { Character, Episode } from "../../types";

function EpisodeById() {
  const { episodeId } = useParams();

  const [episode, setEpisode] = useState<Episode>();
  const [charactersNameFromEpisode, setCharactersNameFromEpisode] = useState<
    Character[]
  >([]);

  useEffect(() => {
    (async () => {
      const getInfoEpisode = await fetch(
        `https://rickandmortyapi.com/api/episode/${episodeId}`,
        { method: "GET" }
      ).then((response) => response.json());

      setEpisode(getInfoEpisode);
    })();
  }, [episodeId]);

  useEffect(() => {
    if (episode !== undefined) {
      (async () => {
        const episodeName = await Promise.all(
          episode?.characters.map(async (fetchUrl) => {
            const response = await fetch(fetchUrl, { method: "GET" });
            return response.json();
          })
        );
        setCharactersNameFromEpisode(episodeName);
      })();
    }
  }, [episodeId, episode]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Detalhes do episódio:
        </Typography>
        <Typography color="text.primary">
          Temporada: {episode?.episode}
        </Typography>
        <Typography color="text.primary">Name: {episode?.name}</Typography>
        <Typography color="text.primary">
          Air Date: {episode?.air_date}
        </Typography>
        <Divider />
        <Typography color="text.primary">Characters:</Typography>
        {charactersNameFromEpisode.map((characterName) => (
          <Typography key={characterName.id} color="text.primary">
            {characterName.name}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default EpisodeById;
