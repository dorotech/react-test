import { Link } from 'react-router-dom';

import { Card, Details } from './styles';

type CharacterData = {
  character: {
    id: number,
    name: string,
    status: string,
    image: string,
  }
};

export default function CharacterCard({ character }: CharacterData) {
  return (
    <Card>
      <Link to={`character/${character.id}`}>
        <img src={character.image} alt={character.name} />
      </Link>
      <Details>
        <div>
          <Link to={`character/${character.id}`}>
            <p>{character.name}</p>
          </Link>
          <div className="details--status">
            <span className={`details--status--symbol ${character.status === 'Dead' && 'dead'} ${character.status === 'Alive' && 'alive'} ${character.status === 'unknown' && 'unknown'}`} />
            <span className="details--status--name">{character.status}</span>
          </div>
        </div>
        <Link to={`character/${character.id}`}>
          <span className="more-details">Show More</span>
        </Link>
      </Details>

    </Card>
  );
}
