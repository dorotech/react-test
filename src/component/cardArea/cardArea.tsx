import React, { useEffect, useState } from 'react';
import { Character } from '../../models/responses/Character';
import { rmService } from '../../service/rick-morty';
import Card from '../card/card';
import FilterBar from '../filterBar/filterBar';
import Pagination from '../pagination/pagination';

/**
 * @brief Component which contains most the the application.
 * It has the filter bar, all the cards, and the pagination (on the top and down).
 * @returns A styled card area component with the character data.
 */

const CardArea = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsCount, setItemsCount] = useState(826);
  // Filter consts
  const [filterName, setFilterName] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('');
  // const [filterType, setFilterType] = useState('');
  const [filterGender, setFilterGender] = useState('');
  /**
   * @brief Function which GETS the initial characters
   * from the API.
   * @returns The characters data.
   */
  useEffect(() => {
    rmService
      .getCharacters(
        currentPage,
        filterName,
        filterStatus,
        filterSpecies,
        filterGender,
      )
      .then((res) => {
        setCharacters(res.data.results);
        setItemsCount(res.data.info.count);
      });
  }, [currentPage]);
  /**
   * @brief Function to handle the pagination.
   * @param page The page number
   */
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  /**
   * @brief Function to handle when user clicks
   * to search. Set the filter values and GET the new data.
   */
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
