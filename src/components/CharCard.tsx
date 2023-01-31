import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../interfaces/Services';
import './CharCard.css';

interface CharProps {
  character: Character;
}

export default function CharCard({ character }: CharProps) {
  const {
    image, name, gender, status, location, id,
  } = character;

  let statusColor = 'gray';
  if (status === 'Alive') statusColor = 'green';
  else if (status === 'Dead') statusColor = 'red';

  return (
    <div className="character-card">
      <div className="character-card__image">
        <img src={image} alt={name} />
      </div>

      <div className="character-card__info">
        <div>
          <h2>{name}</h2>
          <span className="character-card__status">
            <span
              className="character-card__status-icon"
              style={{ background: statusColor }}
            />
            {`${status} - ${gender}`}
          </span>
        </div>

        <div className="character-card__item">
          <span>Last known location:</span>
          {location.name}
        </div>

        <Link className="character-card__button" to={`/character/${id}`}>
          Details
        </Link>
      </div>
    </div>
  );
}
