import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CharacterCard from '../../components/CharacterCard';
import Filter from '../../components/Filter';

import './styles.scss';

interface CharacterData {
  id: number,
  name: string,
  status: string,
  image: string,
}

export default function Home() {
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  const { search } = useLocation();
  const urlSearch = search ? `${search}&` : '?';

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character${urlSearch}LIMIT=20`);
      const responseJson = await response.json();

      setCharacters(responseJson.results);
    })();
  }, [search]);

  return (
    <main className="container">
      <Filter />
      <section className="characters-list">
        {
          characters
            ? (
              characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))
            )
            : (
              <h1>Not found characters</h1>
            )
        }
      </section>

    </main>

  );
}
