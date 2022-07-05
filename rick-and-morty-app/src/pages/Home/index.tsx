import { useEffect, useState } from 'react';

import CharacterCard from '../../components/CharacterCard';

import './styles.scss';

interface CharacterData {
  id: number,
  name: string,
  status: string,
  image: string,
}

export default function Home() {
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character?LIMIT=20');
      const responseJson = await response.json();
      setCharacters(responseJson.results);
    })();
  }, []);

  return (
    <main className="container">
      {
        characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      }
    </main>
  );
}
