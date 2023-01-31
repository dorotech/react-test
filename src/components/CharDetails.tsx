import React from "react";
import { Link } from "react-router-dom";
import { Character, Status } from "../interfaces/Services";
import "./CharDetails.css";

interface CharProps {
  character: Character;
}

export default function CharDetails({ character }: CharProps) {
  const { image, name, gender, status, location, origin, species } = character;

  let statusColor = "gray";
  if (status === "Alive") statusColor = "green";
  else if (status === "Dead") statusColor = "red";

  return (
    <div className="character-card--details">
      <div className="character-card__image">
        <img src={image} alt={name} />
      </div>

      <div className="character-card__info">
        <div>
          <h2>{name}</h2>
          <span className="character-card__status">
            <span className="character-card__status-icon" style={{ background: statusColor }} />
            {`${status} - ${gender}`}
          </span>
        </div>

        <div className="character-card__item">
          <span>Species:</span>
          {species}
        </div>

        <div className="character-card__item">
          <span>Last known location:</span>
          {location.name}
        </div>

        <div className="character-card__item">
          <span>First seen in:</span>
          {origin.name}
        </div>

        <Link className="character-card__button" to="/">Voltar</Link>

      </div>
    </div>
  );
}
