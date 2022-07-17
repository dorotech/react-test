import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ThemePicker from '../themePicker/themePicker';

interface FilterBarProps {
  handleFilterSearch?: (
    filterName: string,
    filterStatus: string,
    filterSpecies: string,
    filterGender: string
  ) => void;
}

/**
 * @brief Component for the filter bar with the search and the theme picker.
 * @param param0 Needed to pass the handleFilterSearch function.
 * @returns The filter bar component which contains the search bar and the theme picker.
 */

const FilterBar = ({ handleFilterSearch }: FilterBarProps) => {
  // Filter consts
  const [filterName, setFilterName] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('');
  // const [filterType, setFilterType] = useState('');
  const [filterGender, setFilterGender] = useState('');

  const [searchParams] = useSearchParams();

  /**
   * @brief Function to handle when user clicks
   * @param e The event which is triggered when the user clicks the search button.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleFilterSearch) {
      handleFilterSearch(filterName, filterStatus, filterSpecies, filterGender);
      window.history.replaceState(
        null,
        '',
        `?name=${filterName}&status=${filterStatus}&species=${filterSpecies}&gender=${filterGender}`,
      );
    }
  };

  /**
   * @brief Function to handle the clear. It also cleans the URL on the browser.
   * @param e The event which is triggered whe nthe user clicks the clear button.
   */
  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (handleFilterSearch) {
      handleFilterSearch('', '', '', '');
      window.history.replaceState(null, '', './');
    }
  };

  useEffect(() => {
    setFilterName(searchParams.get('name') || '');
    if (handleFilterSearch) {
      setTimeout(() => {
        handleFilterSearch(
          searchParams.get('name') || '',
          searchParams.get('status') || '',
          searchParams.get('species') || '',
          searchParams.get('gender') || '',
        );
      }, 200);
    }
  }, [searchParams]);

  return (
    <form
      className="flex flex-wrap items-center justify-center mt-4 mb-2 py-4 text-center w-full rounded-lg bg-yellow-50 bg-opacity-50 dark:bg-opacity-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="filter-field">
        <div className="flex relative rounded-l-full bg-yellow-50 dark:bg-gray-900 dark:text-yellow-100 leading-10">
          <label
            htmlFor="Name"
            className="mx-2 font-semibold text-gray-700 dark:text-yellow-100"
          >
            Name
          </label>
        </div>
        <input
          className="rounded-lg leading-6 px-1 rounded-r-full w-full outline-none bg-sky-50 caret-yellow-500 border-4 hover:border-l-yellow-500 focus:border-l-yellow-500 focus:border-yellow-100"
          type="text"
          id="name"
          name="name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          placeholder="Rick Sanchez"
        />
      </div>
      <div className="filter-field">
        <div className="flex relative rounded-l-full bg-yellow-50 dark:bg-gray-900 leading-10">
          <label
            htmlFor="Status"
            className="mx-2 font-semibold text-gray-700 dark:text-yellow-100"
          >
            Status
          </label>
        </div>
        <select
          className="rounded-lg leading-6 px-1 rounded-r-full w-full outline-none bg-sky-50 border-4 hover:border-l-yellow-500 focus:border-l-yellow-500 focus:border-yellow-100"
          id="status"
          name="status"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">None</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="filter-field">
        <div className="flex relative rounded-l-full bg-yellow-50 dark:bg-gray-900 leading-10">
          <label
            htmlFor="Species"
            className="mx-2 font-semibold text-gray-700 dark:text-yellow-100"
          >
            Species
          </label>
        </div>
        <input
          className="rounded-lg leading-6 px-1 rounded-r-full w-full outline-none bg-sky-50 border-4 hover:border-l-yellow-500 focus:border-l-yellow-500 focus:border-yellow-100"
          type="text"
          id="species"
          name="species"
          value={filterSpecies}
          onChange={(e) => setFilterSpecies(e.target.value)}
          placeholder="Human"
        />
      </div>
      <div className="filter-field">
        <div className="flex relative rounded-l-full bg-yellow-50 dark:bg-gray-900 leading-10">
          <label
            htmlFor="Gender"
            className="mx-2 font-semibold text-gray-700 dark:text-yellow-100"
          >
            Gender
          </label>
        </div>
        <select
          className="rounded-lg leading-6 px-1 rounded-r-full w-full outline-none bg-sky-50 border-4 hover:border-l-yellow-500 focus:border-l-yellow-500 focus:border-yellow-100"
          id="gender"
          name="gender"
          value={filterGender}
          onChange={(e) => setFilterGender(e.target.value)}
        >
          <option value="">None</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <button
        className="btn text-md mx-1 px-4 py-2 my-2 sm:w-auto w-11/12"
        type="submit"
      >
        Search
      </button>
      <button
        className="btn text-md mx-1 px-4 py-2 my-2 sm:w-auto w-11/12"
        type="button"
        onClick={(e) => handleClear(e)}
      >
        Clear Filter
      </button>
      <ThemePicker />
    </form>
  );
};

export default FilterBar;
