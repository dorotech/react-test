const FilterBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-start mt-4 mb-2 py-4 text-center w-full rounded-lg bg-yellow-50 bg-opacity-50">
      <div className="name-filter my-2 flex items-center mx-2">
        <div className="flex relative rounded-l-full bg-yellow-50 leading-10">
          <label htmlFor="Name" className="mx-2 font-semibold text-gray-700">
            Name
          </label>
        </div>
        <input
          className="rounded-lg leading-6 px-1 rounded-r-full w-full outline-none bg-sky-50 caret-yellow-500 border-4 hover:border-l-yellow-500 focus:border-l-yellow-500 focus:border-yellow-100"
          type="text"
          id="Name"
          placeholder="Rick"
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
          id="Status"
        >
          <option disabled selected>
            Status
          </option>
          <option>Alive</option>
          <option>Dead</option>
          <option>Unknown</option>
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
          id="Species"
          placeholder="Species"
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
          id="Gender"
        >
          <option disabled selected>
            Gender
          </option>
          <option>Female</option>
          <option>Male</option>
          <option>Genderless</option>
          <option>Unknown</option>
        </select>
      </div>
      <button className="text-md mx-2 px-4 py-2 rounded-md font-semibold bg-yellow-100 text-gray-700 shadow-md hover:text-gray-900 hover:bg-yellow-50 transition ease-in-out duration-150">
        Search
      </button>
    </div>
  );
};

export default FilterBar;
