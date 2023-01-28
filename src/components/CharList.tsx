import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import getCharacters from '../services/get/getCharacters';
import CharCard from './CharCard';

export default function CharList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const [characters, setCharacters] = useState<any>([]);

  const fetchCharacters = async () => {
    const { data } = await getCharacters(+page);
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="charlist-container">
      {characters.map((character: any) => <CharCard key={character.id} character={character} />)}
    </div>
  );
}
