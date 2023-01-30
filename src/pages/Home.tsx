import React, { useEffect, useState } from 'react';
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import CharList from '../components/CharList';
import Filters from '../components/Filters';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import { Characters } from '../interfaces/Services';
import getCharacters from '../services/get/getCharacters';
import serializeParams from '../utils/serializeParams';

export default function Home() {
  const [charactersInfo, setCharactersInfo] = useState<Characters>({
    info: {
      pages: 0,
    },
    results: [],
  });
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObj = Object.fromEntries(searchParams.entries());

  const [queryParams, setQueryParams] = useState({
    page: searchParamsObj.page || '1',
    name: searchParamsObj.name || '',
    status: searchParamsObj.status || 'none',
    gender: searchParamsObj.gender || 'none',
    species: searchParamsObj.species || 'none',
  });

  const fetchCharacters = async () => {
    setLoading(true);
    const params = serializeParams(queryParams); // remove parametros não utilizados
    const { data } = await getCharacters(params);
    setLoading(false);
    setCharactersInfo(data);
    setSearchParams(params as unknown as URLSearchParamsInit); // atualiza a url
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [queryParams.page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="main">
      <Header />
      <Filters
        setQueryParams={setQueryParams}
        queryParams={queryParams}
        setCharList={setCharactersInfo}
        setLoading={setLoading}
      />
      <CharList characters={charactersInfo.results} />
      <Pagination
        count={charactersInfo.info.pages}
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
    </div>
  );
}
