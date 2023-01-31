import { useContext, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { ColorModeContext } from "../../contexts";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
import BlockIcon from "@mui/icons-material/Block";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import { Box } from "@mui/system";

const CharacterCard = ({ charData }: any) => {
  const { mode } = useContext(ColorModeContext);
  const [openDialog, setOpenDialog] = useState(false);

  const ColorStatus: any = {
    Alive: "success",
    Dead: "error",
    unknown: "warning",
  };

  const GenderList: any = {
    Male: (
      <MaleIcon
        style={{
          color: mode === "light" ? "#484b78" : "#dddeeb",
        }}
      />
    ),
    Female: (
      <FemaleIcon
        style={{
          color: mode === "light" ? "#484b78" : "#dddeeb",
        }}
      />
    ),
    genderless: (
      <TransgenderIcon
        style={{
          color: mode === "light" ? "#484b78" : "#dddeeb",
        }}
      />
    ),
    unknown: (
      <BlockIcon
        style={{
          color: mode === "light" ? "#484b78" : "#dddeeb",
        }}
      />
    ),
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        height: "150px",
        background: mode === "light" ? "#dddeeb" : "#484b78",
        color: mode === "light" ? "black" : "white",
        boxShadow:
          mode === "light"
            ? "1px 1px 1px 1px #484b78"
            : "1px 1px 1px 1px #dddeeb",
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
          <Button
            onClick={handleClickOpen}
            style={{
              color: mode === "light" ? "#484b78" : "#dddeeb",
            }}
          >
            Detalhes
          </Button>
        </CardActions>
      </CardContent>
      <Dialog open={openDialog} onClose={handleClose}>
        <Box
          style={{
            background: mode === "light" ? "#dddeeb" : "#484b78",
            color: mode === "light" ? "black" : "white",
          }}
        >
          <DialogTitle style={{ display: "flex", justifyContent: "center" }}>
            {charData.name}
          </DialogTitle>
          <DialogContent>
            <Typography style={{ display: "flex" }}>
              <b>Espécie:</b> {charData.species}
            </Typography>
            <Typography style={{ display: "flex" }}>
              <b>Gênero:</b> {GenderList[charData.gender]}
            </Typography>
            <Typography style={{ display: "flex" }}>
              <b>Nascimento:</b> {charData.origin.name}
              <BabyChangingStationIcon
                style={{
                  color: mode === "light" ? "#484b78" : "#dddeeb",
                }}
              />
            </Typography>
            <Typography style={{ display: "flex" }}>
              <b>Localização:</b> {charData.location.name}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{
                color: mode === "light" ? "#484b78" : "#dddeeb",
              }}
            >
              Fechar
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Card>
  );
};

export { CharacterCard };
