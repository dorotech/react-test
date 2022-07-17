import { useEffect, useState } from "react";
import { Character } from "../../models/responses/Character";
import { rmService } from "../../service/rick-morty";
import Card from "../card/card";
import FilterBar from "../filterBar/filterBar";
import Pagination from "../pagination/pagination";

const CardArea = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsCount, setItemsCount] = useState(826);
  // Filter consts
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");
  // const [filterType, setFilterType] = useState("");
  const [filterGender, setFilterGender] = useState("");

  useEffect(() => {
    rmService
      .getCharacters(
        currentPage,
        filterName,
        filterStatus,
        filterSpecies,
        filterGender
      )
      .then((res) => {
        setCharacters(res.data.results);
        setItemsCount(res.data.info.count);
      });
  }, [currentPage]);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterSearch = (
    filterName: string,
    filterStatus: string,
    filterSpecies: string,
    filterGender: string
  ) => {
    setFilterName(filterName);
    setFilterStatus(filterStatus);
    setFilterSpecies(filterSpecies);
    // setFilterType(filterType);
    setFilterGender(filterGender);
    setCurrentPage(1);
    rmService
      .getCharacters(1, filterName, filterStatus, filterSpecies, filterGender)
      .then((res) => {
        setCharacters(res.data.results);
        setItemsCount(res.data.info.count);
      });
  };
  return (
    <>
      <FilterBar handleFilterSearch={handleFilterSearch} />
      <Pagination
        itemsCount={itemsCount}
        pageSize={20}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <div className="flex items-center justify-center flex-wrap text-center w-12/12">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <Pagination
        itemsCount={itemsCount}
        pageSize={20}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default CardArea;
