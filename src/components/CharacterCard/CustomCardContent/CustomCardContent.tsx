import { CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";

interface CustomCardContentProps {
  status?: string;
  gender: string | undefined;
  species: string | undefined;
  type: string | undefined;
  origin: string | undefined;
}

function CustomCardContent({
  status,
  gender,
  species,
  type,
  origin,
}: CustomCardContentProps) {
  return (
    <CardContent>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="body1">Status:</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {status ?? ""}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Gender:</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {gender ?? ""}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Specie:</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {species ?? ""}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Type/Subspecies:</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {type !== "" ? type : "-"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Origin:</Typography>
          <Link to="#">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.2rem",
              }}
            >
              {origin ?? ""}
              <LinkIcon />
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </CardContent>
  );
}

export default CustomCardContent;
