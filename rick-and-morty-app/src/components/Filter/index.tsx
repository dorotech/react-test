import { BaseSyntheticEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type SearchData = {
  name?: string,
  status?: string,
  species?: string
}

export default function Filter() {
  const [nameSearch, setNameSearch] = useState<String>('');
  const [statusSearch, setStatusSearch] = useState<String>('');
  const [specieSearch, setSpecieSearch] = useState<String>('');

  const setSearchParams = useSearchParams()[1];

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

    setSearchParams(param);
  }

  return (
    <section className="filter">
      <form method="GET" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleChangeNameSearch} />

        <select onChange={handleChangeStatusSearch}>
          <option value="">Select the status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select onChange={handleChangeSpecieSearch}>
          <option value="">Select the specie</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>

        <button type="submit">Search</button>
      </form>

    </section>
  );
}
