import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, CardActionArea, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";
import { Character } from "../../types";

interface CharacterListProps {
  characters: Character[];
}

function CharacterList({ characters }: CharacterListProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      {characters.map((character) => {
        return (
          <Card key={character.id} sx={{ maxWidth: 300 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="name">
                  {character.name
                    .split(" ")
                    .map((char) => char[0])
                    .join(".")}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={character.name}
              subheader={new Intl.DateTimeFormat("pt-br", {
                day: "2-digit",
                month: "short",
                year: "2-digit",
              }).format(new Date(character.created ?? ""))}
            />
            <CardActionArea>
              <Link to={`/character/${character.id}` ?? ""}>
                <CardMedia
                  component="img"
                  height="300"
                  image={character.image}
                  alt={character.name}
                />
              </Link>
            </CardActionArea>
            <CardContent>
              <span>
                <Typography>STATUS</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {character.status}
                </Typography>
              </span>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}

export default CharacterList;
