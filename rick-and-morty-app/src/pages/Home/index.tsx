import { useEffect, useState } from 'react';

export type CharacterProps = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string,
  },
  location: {
    name: string,
    url: string,
  },
  image: string,
};

export default function Home() {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

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
          <div>
            <img src={character.image} alt={character.name} />
            <p>
              Nome:
              {' '}
              {character.name}
            </p>
            <p>
              Status:
              {' '}
              {character.status}
            </p>
          </div>
        ))
      }
    </main>
  );
}
