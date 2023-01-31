import { useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Box } from "@mui/system";
import { PrimaryButton } from "../../../components/primaryButton";
import { ColorModeContext } from "../../../contexts";
import { capitalizeFirstLetter } from "../../../utils";
import styles from "./styles.module.scss";

interface FiltersForm {
  open: boolean;
  handleClose: () => void;
  handleFilter: () => void;
  genderName: string;
  handleGenderName: (event: SelectChangeEvent<string>) => void;
  statusName: string;
  handleStatusName: (event: SelectChangeEvent<string>) => void;
  speciesName: string;
  handleSpecieName: (event: SelectChangeEvent<string>) => void;
}

const FiltersForm = ({
  open,
  handleClose,
  handleFilter,
  genderName,
  handleGenderName,
  statusName,
  handleStatusName,
  speciesName,
  handleSpecieName,
}: FiltersForm) => {
  const { mode } = useContext(ColorModeContext);

  const genderOptions = ["female", "male", "genderless", "unknown"];
  const specieOptions = ["human", "humanoid"];
  const statusOptions = ["alive", "dead", "unknown"];

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        className={`${styles.container} ${
          mode !== "light" && styles.container_dark_mode
        }`}
      >
        <DialogTitle className={styles.title}>Mais Filtros</DialogTitle>
        <DialogContent className={styles.dialog_content}>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel>Gênero</InputLabel>
            <Select
              value={genderName}
              onChange={handleGenderName}
              input={<OutlinedInput label="Gender" />}
            >
              {genderOptions.map((name) => (
                <MenuItem key={name} value={name}>
                  {capitalizeFirstLetter(name)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusName}
              onChange={handleStatusName}
              input={<OutlinedInput label="Status" />}
            >
              {statusOptions.map((name) => (
                <MenuItem key={name} value={name}>
                  {capitalizeFirstLetter(name)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel>Espécie</InputLabel>
            <Select
              value={speciesName}
              onChange={handleSpecieName}
              input={<OutlinedInput label="Specie" />}
            >
              {specieOptions.map((name) => (
                <MenuItem key={name} value={name}>
                  {capitalizeFirstLetter(name)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <PrimaryButton buttonName="Filtrar" handleClick={handleFilter} />
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export { FiltersForm };
