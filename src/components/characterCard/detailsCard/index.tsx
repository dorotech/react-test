import { useContext } from "react";
import { ColorModeContext } from "../../../contexts";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
import BlockIcon from "@mui/icons-material/Block";
import styles from "./styles.module.scss";
import { PrimaryButton } from "../../primaryButton";
import { CharacterData } from "../../../types";

interface DetailsCardProps {
  open: boolean;
  handleClose: () => void;
  charData: CharacterData;
}

const DetailsCard = ({ open, handleClose, charData }: DetailsCardProps) => {
  const { mode } = useContext(ColorModeContext);

  const GenderList: any = {
    Male: (
      <MaleIcon
        className={`${styles.icon} ${
          mode !== "light" && styles.icon_dark_mode
        }`}
      />
    ),
    Female: (
      <FemaleIcon
        className={`${styles.icon} ${
          mode !== "light" && styles.icon_dark_mode
        }`}
      />
    ),
    genderless: (
      <TransgenderIcon
        className={`${styles.icon} ${
          mode !== "light" && styles.icon_dark_mode
        }`}
      />
    ),
    unknown: (
      <BlockIcon
        className={`${styles.icon} ${
          mode !== "light" && styles.icon_dark_mode
        }`}
      />
    ),
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        className={`${styles.container} ${
          mode !== "light" && styles.container_dark_mode
        }`}
      >
        <DialogTitle className={styles.dialog_title}>
          {charData.name}
        </DialogTitle>
        <DialogContent>
          <Typography className={styles.info_text}>
            <b>Espécie:</b> {charData.species}
          </Typography>
          <Typography className={styles.info_text}>
            <b>Gênero:</b> {GenderList[charData.gender]}
          </Typography>
          <Typography className={styles.info_text}>
            <b>Nascimento:</b> {charData.origin.name}
            <BabyChangingStationIcon
              className={`${styles.icon} ${
                mode !== "light" && styles.icon_dark_mode
              }`}
            />
          </Typography>
          <Typography className={styles.info_text}>
            <b>Localização:</b> {charData.location.name}
          </Typography>
        </DialogContent>
        <DialogActions>
          <PrimaryButton buttonName="Fechar" handleClick={handleClose} />
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export { DetailsCard };
