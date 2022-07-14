import { Character } from "../../models/responses/Character";
import "./card.scss";

interface CardProps {
  character: Character;
}

const Card = (props: CardProps) => {
  const { name, status, species, gender, image } = props.character;
  return (
    <div className="flex bg-yellow-50 bg-opacity-50 shadow-md rounded-3xl mx-3 my-3">
      <div className="inside-card-container m-3">
        <img className="character-image rounded-3xl" src={image} alt="Rick" />
        <div className="shadow-on-name">
          <div className="flex character-name relative -left-5 -top-5 bg-sky-50">
            <span className="mx-2 leading-8 font-semibold">{name}</span>
          </div>
        </div>
        <div className="character-info-container relative -top-2 rounded-3xl bg-yellow-50">
          <div className="character-status">{status}</div>
          <div className="character-species">{species}</div>
          <div className="character-gender">{gender}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
