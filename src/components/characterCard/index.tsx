import { useContext } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { ColorModeContext } from "../../contexts";

const CharacterCard = ({ charData }: any) => {
  const { mode } = useContext(ColorModeContext);

  const ColorStatus: any = {
    Alive: "success",
    Dead: "error",
    unknown: "warning",
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        height: "150px",
        background: mode === "light" ? "#dddeeb" : "#484b78",
        color: mode === "light" ? "black" : "white",
      }}
    >
      <CardMedia
        component="img"
        image={charData.image}
        alt="Char"
        style={{ width: "40%" }}
      />
      <CardContent
        style={{
          paddingBottom: "0px",
          padding: "8px",
          width: "100%",
          position: "relative",
        }}
      >
        <Typography component="div" variant="h6">
          {charData.name}
        </Typography>
        <Chip label={charData.status} color={ColorStatus[charData.status]} />
        <CardActions
          style={{
            padding: "0px",
            position: "absolute",
            bottom: "0",
            right: "0",
          }}
        >
          <Button>Detalhes</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export { CharacterCard };
