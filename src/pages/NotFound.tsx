import { Box, Typography } from "@mui/material";

import ImageNotFound from "../assets/notFoundImage.jpg";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: `url(${ImageNotFound})`,
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Dokdo', cursive",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
        variant="h1"
      >
        404
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Dokdo', cursive",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
        variant="h1"
      >
        THERE IS NOTHING HERE
      </Typography>
    </Box>
  );
}

export default NotFound;
