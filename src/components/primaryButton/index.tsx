import { useContext } from "react";
import { Button } from "@mui/material";
import styles from "./styles.module.scss";
import { ColorModeContext } from "../../contexts";

interface ButtonProps {
  buttonName: string;
  handleClick: () => void;
}

const PrimaryButton = ({ buttonName, handleClick }: ButtonProps) => {
  const { mode } = useContext(ColorModeContext);

  return (
    <Button
      onClick={handleClick}
      className={`${styles.button} ${
        mode !== "light" && styles.button_dark_mode
      }`}
    >
      {buttonName}
    </Button>
  );
};

export { PrimaryButton };
