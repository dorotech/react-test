import { useEffect, useState } from 'react';
import CharacterCard from '../../components/CharacterCard';

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
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const responseJson = await response.json();
      setCharacters(responseJson.results);
    })();
  }, []);

  return (
    <main>
      {
        characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      }
    </main>
  );
}
