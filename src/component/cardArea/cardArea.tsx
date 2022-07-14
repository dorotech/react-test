import { useEffect, useState } from "react";
import { Character } from "../../models/responses/Character";
import { rmService } from "../../service/rick-morty";
import Card from "../card/card";

const CardArea = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    rmService.getCharacters().then((data) => {
      setCharacters(data.data.results);
    });
  }, []);

  console.log(characters);
  return (
    <div className="flex items-center justify-center flex-wrap text-center w-12/12">
      {characters.map((character) => (
        <Card key={character.id} character={character}></Card>
      ))}
    </div>
  );
};

export default CardArea;
