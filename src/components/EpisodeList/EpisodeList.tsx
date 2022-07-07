import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Character } from "../../types";

interface AccordionsProps {
  episodes?: Character["episode"];
}

function EpisodeList({ episodes }: AccordionsProps) {
  const [expanded, setExpanded] = useState<boolean>(true);

  function handleChange() {
    setExpanded(!expanded);
  }

  return (
    <Accordion
      disableGutters
      expanded={expanded}
      onChange={() => handleChange()}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="episodes"
        id="episodes"
      >
        <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
          Episodes
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          {episodes?.map((episode) => {
            const getIdFromUrlEpisode = /episode\/(\d+)/.exec(episode!) ?? "";
            return (
              <Grid key={episode} item xs={12} sm={12} lg={6}>
                <Link to={`episode/${getIdFromUrlEpisode[1]}`}>
                  <Typography>{episode}</Typography>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default EpisodeList;
