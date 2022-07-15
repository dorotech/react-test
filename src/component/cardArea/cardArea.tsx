import { useEffect, useState } from "react";
import { Character } from "../../models/responses/Character";
import { rmService } from "../../service/rick-morty";
import Card from "../card/card";
import Pagination from "../pagination/pagination";

const CardArea = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    rmService.getCharacters().then((data) => {
      setCharacters(data.data.results);
    });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center flex-wrap text-center w-12/12">
        {characters.map((character) => (
          <Card key={character.id} character={character}></Card>
        ))}
      </div>
      <Pagination pages={50}></Pagination>
    </>
  );
};

export default CardArea;
