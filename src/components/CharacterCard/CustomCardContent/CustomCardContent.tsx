import { CardContent, Grid, Typography } from "@mui/material";
import { useCustomTheme } from "../../../contexts/CustomThemeContext";

interface CustomCardContentProps {
  status?: string;
  gender: string | undefined;
  species: string | undefined;
  type: string | undefined;
}

function CustomCardContent({
  status,
  gender,
  species,
  type,
}: CustomCardContentProps) {
  const { mode } = useCustomTheme();

  return (
    <CardContent>
      <Grid container>
        <Grid item xs={6}>
          <Typography
            color={mode === "light" ? "primary.main" : "primary.contrastText"}
            variant="body1"
          >
            Status:
          </Typography>
          <Typography
            color={mode === "light" ? "primary.dark" : "secondary.light"}
            variant="subtitle1"
          >
            {status ?? ""}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            color={mode === "light" ? "primary.main" : "primary.contrastText"}
            variant="body1"
          >
            Gender:
          </Typography>
          <Typography
            color={mode === "light" ? "primary.dark" : "secondary.light"}
            variant="subtitle1"
          >
            {gender ?? ""}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            color={mode === "light" ? "primary.main" : "primary.contrastText"}
            variant="body1"
          >
            Specie:
          </Typography>
          <Typography
            color={mode === "light" ? "primary.dark" : "secondary.light"}
            variant="subtitle1"
          >
            {species ?? ""}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            color={mode === "light" ? "primary.main" : "primary.contrastText"}
            variant="body1"
          >
            Type/Subspecies:
          </Typography>
          <Typography
            color={mode === "light" ? "primary.dark" : "secondary.light"}
            variant="subtitle1"
          >
            {type !== "" ? type : "-"}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
}

export default CustomCardContent;
