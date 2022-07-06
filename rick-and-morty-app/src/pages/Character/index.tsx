import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Arrow, LoadingSpinner } from '../../components/Icons';

import './styles.scss';

interface CharacterData {
  id: number,
  name: string,
  status: string,
  image: string,
  species: string,
  type: string,
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown',
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const responseJson = await response.json();
      setLoading(false);
      setCharacter(responseJson);
    })();
  }, []);

  if (loading) {
    return (
      <main className="container-character">
        <Link to="/">
          <div className="back">
            <Arrow />
            <span>Back</span>
          </div>
        </Link>
        <LoadingSpinner />
      </main>
    );
  }

  return (
    <main className="container-character">
      <Link to="/">
        <div className="back">
          <Arrow />
          <span>Back</span>
        </div>
      </Link>

      <h1>{character.name}</h1>

      <div className="details">
        <img src={character.image} alt={character.name} />

        <div className="infos">
          <h3>Details</h3>
          <div className="status">
            <span className={`status-symbol ${character.status === 'Dead' && 'dead'} ${character.status === 'Alive' && 'alive'} ${character.status === 'unknown' && 'unknown'}`} />
            <span className="status-name">{character.status}</span>
          </div>
          <p>Origin: {character?.origin?.name}</p>
          <p>Location: {character?.location?.name}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Type: {character.type || '--'}</p>
        </div>

      </div>
    </main>
  );
}
