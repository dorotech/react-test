import { useState } from "react";
interface FilterBarProps {
  handleFilterSearch?: (
    filterName: string,
    filterStatus: string,
    filterSpecies: string,
    filterGender: string
  ) => void;
}

const FilterBar = ({ handleFilterSearch }: FilterBarProps) => {
  // Filter consts
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");
  // const [filterType, setFilterType] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleFilterSearch) {
      handleFilterSearch(filterName, filterStatus, filterSpecies, filterGender);
    }
  };

  return (
    <form
      className="flex flex-wrap items-center justify-start mt-4 mb-2 py-4 text-center w-full rounded-lg bg-yellow-50 bg-opacity-50"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="name-filter my-2 flex items-center mx-2">
        <div className="flex relative rounded-l-full bg-yellow-50 leading-10">
          <label htmlFor="Name" className="mx-2 font-semibold text-gray-700">
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
        ></input>
      </div>
      <div className="status-filter my-2 flex items-center mx-2">
        <div className="flex relative rounded-l-full bg-yellow-50 leading-10">
          <label htmlFor="Status" className="mx-2 font-semibold text-gray-700">
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
      <div className="species-filter my-2 flex items-center mx-2">
        <div className="flex relative rounded-l-full bg-yellow-50 leading-10">
          <label htmlFor="Species" className="mx-2 font-semibold text-gray-700">
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
        ></input>
      </div>
      <div className="gender-filter my-2 flex items-center mx-2">
        <div className="flex relative rounded-l-full bg-yellow-50 leading-10">
          <label htmlFor="Gender" className="mx-2 font-semibold text-gray-700">
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
        className="text-md mx-2 px-4 py-2 rounded-md font-semibold bg-yellow-100 text-gray-700 shadow-md hover:text-gray-900 hover:bg-yellow-50 transition ease-in-out duration-150"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default FilterBar;
