import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CharList from '../components/CharList';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import { Characters } from '../interfaces/Services';
import getCharacters from '../services/get/getCharacters';

export default function Home() {
  const [charactersInfo, setCharactersInfo] = useState<Characters | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || '1');

  const fetchCharacters = async () => {
    const { data } = await getCharacters(+page);
    setCharactersInfo(data);
    setSearchParams({ page });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  if (!charactersInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <CharList characters={charactersInfo.results}/>
      <Pagination count={charactersInfo.info.pages} page={page} setPage={(value: string) => setPage(value)}/>
    </div>
  );
}
