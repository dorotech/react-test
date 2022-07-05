import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface CharacterData {
  id: number,
  name: string,
  status: string,
  image: string,
  species: string,
  type: string,
  gender: 'Male' | 'Female',
  origin: {
    name: string,
  },
  location: {
    name: string,
  },

}

export default function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterData>({} as CharacterData);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const responseJson = await response.json();
      setCharacter(responseJson);
    })();
  }, []);

  return (
    <main>
      <div>
        <img src={character.image} alt={character.name} />
        <p>
          Name:
          {character.name}
        </p>
        <p>
          Status:
          {character.status}
        </p>
        <p>
          Species:
          {character.species}
        </p>
        <p>
          Type:
          {character.type}
        </p>
        <p>
          Gender:
          {character.gender}
        </p>
        <p>
          Origin:
          {character?.origin?.name}
        </p>
        <p>
          Location:
          {character?.location?.name}
        </p>
      </div>
    </main>
  );
}
