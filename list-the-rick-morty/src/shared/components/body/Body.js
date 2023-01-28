import axios from "axios";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Environment } from "../../environment";
import { Image } from "@mui/icons-material";

/* export interface ICharacter {
  id: number;
  status: string;
  image: string;
} */

export const Body = () => {
  const [characters, setCharacters] = useState([]);

  const getApi = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();

      console.log(data.results);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Box
      display="flex"
      gap={2}
      marginX={1}
      padding={4}
      paddingX={2}
    >
      {characters.map((character) => (
        <Box key={character.id} boxSizing="border-box" border="2px solid #f9a825" >
          <img src={character.image} sizes="1px" />
          <h3>Nome: {character.name}</h3>
          <p>Status: {character.status}</p>
        </Box>
      ))}
    </Box>
  );
};
