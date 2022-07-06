import { useEffect, useState } from 'react';
import {
  useNavigate, useParams,
} from 'react-router-dom';

import { Arrow, LoadingSpinner } from '../../components/Icons';

import { Container, Details } from './styles';

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
  const navigate = useNavigate();

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
      <Container>
        <button type="button" onClick={() => navigate(-1)}>
          <Arrow />
          <span>Back</span>
        </button>
        <LoadingSpinner />
      </Container>
    );
  }

  return (
    <Container>
      <button type="button" onClick={() => navigate(-1)}>
        <Arrow />
        <span>Back</span>
      </button>

      <h1>{character.name}</h1>

      <Details>
        <img src={character.image} alt={character.name} />

        <div className="details--infos">
          <h3>Details</h3>
          <div className="details--status">
            <span className={`details--status--symbol ${character.status === 'Dead' && 'dead'} ${character.status === 'Alive' && 'alive'} ${character.status === 'unknown' && 'unknown'}`} />
            <span className="details--status--name">{character.status}</span>
          </div>
          <p>Origin: {character?.origin?.name}</p>
          <p>Location: {character?.location?.name}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Type: {character.type || '--'}</p>
        </div>

      </Details>
    </Container>
  );
}
