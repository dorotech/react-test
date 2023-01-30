import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";

const CharactersContainer = () => {
  return (
    <Box style={{ gridArea: "char" }}>
      <div>Search Bar</div>
      <div>Characters</div>
    </Box>
  );
};

export { CharactersContainer };
