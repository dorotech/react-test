import { Link } from 'react-router-dom';

import './styles.scss';

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
    <div className="character-card">
      <Link to={`character/${character.id}`}>
        <img src={character.image} alt={character.name} />
      </Link>
      <div className="details">
        <div className="infos">
          <Link to={`character/${character.id}`}>
            <p>{character.name}</p>
          </Link>
          <div className="status">
            <span className="status-symbol alive" />
            <span className="status-name">{character.status}</span>
          </div>
        </div>
        <Link to={`character/${character.id}`}>
          <span className="more-details">Ver mais</span>
        </Link>
      </div>

    </div>
  );
}
