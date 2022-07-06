import { BaseSyntheticEvent, useState } from 'react';
import { Empty, Search } from '../Icons';

type SearchData = {
  name?: string,
  status?: string,
  species?: string
}

type FilterProps = {
  handleChangeSearchParams: (arg: SearchData) => void,
  searchParams: any,
}

export default function Filter({ handleChangeSearchParams, searchParams }: FilterProps) {
  const [nameSearch, setNameSearch] = useState<String>('');
  const [statusSearch, setStatusSearch] = useState<String>('');
  const [specieSearch, setSpecieSearch] = useState<String>('');

  function handleChangeNameSearch(event: BaseSyntheticEvent) {
    setNameSearch(event.currentTarget.value);
  }

  function handleChangeStatusSearch(event: BaseSyntheticEvent) {
    setStatusSearch(event.currentTarget.value);
  }

  function handleChangeSpecieSearch(event: BaseSyntheticEvent) {
    setSpecieSearch(event.currentTarget.value);
  }

  function handleSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();

    const param = {} as SearchData;

    if (nameSearch) param.name = nameSearch as string;
    if (statusSearch) param.status = statusSearch as string;
    if (specieSearch) param.species = specieSearch as string;

    handleChangeSearchParams(param);
  }

  function handleClearNameField() {
    searchParams.delete('name');
    setNameSearch('');
    handleChangeSearchParams(searchParams);
  }

  function handleClearStatusField() {
    searchParams.delete('status');
    setStatusSearch('');
    handleChangeSearchParams(searchParams);
  }

  function handleClearSpecieField() {
    searchParams.delete('species');
    setSpecieSearch('');
    handleChangeSearchParams(searchParams);
  }

  return (
    <section className="filter">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleChangeNameSearch} value={nameSearch as string} />

        <select onChange={handleChangeStatusSearch} value={statusSearch as string}>
          <option value="">Select the status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select onChange={handleChangeSpecieSearch} value={specieSearch as string}>
          <option value="">Select the specie</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>

        <button type="submit">
          <Search />
        </button>
      </form>

      {searchParams.get('name') && <span onClick={handleClearNameField} className="filterSearch">Name: {searchParams.get('name')} <Empty /></span>}
      {searchParams.get('status') && <span onClick={handleClearStatusField} className="filterSearch">Status: {searchParams.get('status')} <Empty /></span>}
      {searchParams.get('species') && <span onClick={handleClearSpecieField} className="filterSearch">Specie: {searchParams.get('species')} <Empty /></span>}

    </section>
  );
}
