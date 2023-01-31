import { useContext, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { ColorModeContext } from "../../contexts";
import { DetailsCard } from "./detailsCard";
import styles from "./styles.module.scss";
import { PrimaryButton } from "../primaryButton";
import { CharacterData } from "../../types";

interface CharacterCardProps {
  charData: CharacterData;
}

const CharacterCard = ({ charData }: CharacterCardProps) => {
  const { mode } = useContext(ColorModeContext);
  const [openDialog, setOpenDialog] = useState(false);

  const ColorStatus: any = {
    Alive: "success",
    Dead: "error",
    unknown: "warning",
  };

  const handleToogleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <Card
      className={`${styles.card_container} ${
        mode !== "light" && styles.card_container_dark_mode
      }`}
    >
      <CardMedia
        component="img"
        image={charData.image}
        alt="Char"
        style={{ width: "40%" }}
        onClick={() => window.open(`${charData.image}`, "_blank")}
      />
      <CardContent className={styles.card_content}>
        <Typography component="div" variant="h6">
          {charData.name}
        </Typography>
        <Chip label={charData.status} color={ColorStatus[charData.status]} />
        <CardActions className={styles.card_actions}>
          <PrimaryButton
            buttonName="Detalhes"
            handleClick={handleToogleDialog}
          />
        </CardActions>
      </CardContent>
      <DetailsCard
        open={openDialog}
        handleClose={handleToogleDialog}
        charData={charData}
      />
    </Card>
  );
};

export { CharacterCard };
