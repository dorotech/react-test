import { Alert, AlertColor, Snackbar } from "@mui/material";

interface SnackBarProps {
  open: boolean;
  onClose: () => void;
  type: AlertColor;
}

const SnackBar = ({ open, onClose, type }: SnackBarProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={type}>
        Não foram encontrado personagens usando esse filtro!
      </Alert>
    </Snackbar>
  );
};

export { SnackBar };
