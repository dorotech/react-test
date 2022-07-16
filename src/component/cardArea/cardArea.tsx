import { useEffect, useState } from "react";
import { Character } from "../../models/responses/Character";
import { rmService } from "../../service/rick-morty";
import Card from "../card/card";
import Pagination from "../pagination/pagination";

const CardArea = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    rmService.getCharacters(currentPage).then((res) => {
      setCharacters(res.data.results);
    });
  }, [currentPage]);

  // const [pageSize, setPageSize] = useState(20);
  useEffect(() => {
    rmService.getCharacters().then((data) => {
      setCharacters(data.data.results);
    });
  }, []);

  return (
    <>
      <Pagination
        onPageChange={onPageChange}
        itemsCount={826}
        pageSize={20}
        currentPage={currentPage}
      ></Pagination>
      <div className="flex items-center justify-center flex-wrap text-center w-12/12">
        {characters.map((character) => (
          <Card key={character.id} character={character}></Card>
        ))}
      </div>
      <Pagination
        onPageChange={onPageChange}
        itemsCount={826}
        pageSize={20}
        currentPage={currentPage}
      ></Pagination>
    </>
  );
};

export default CardArea;
