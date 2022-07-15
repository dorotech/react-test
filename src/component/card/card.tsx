import { Character } from "../../models/responses/Character";
import "./card.scss";

interface CardProps {
  character: Character;
}

const Card = (props: CardProps) => {
  const { name, status, species, gender, image, type, origin, location } =
    props.character;
  return (
    <div className="flex bg-yellow-50 bg-opacity-50 shadow-md rounded-3xl mx-3 my-3">
      <div className="flex flex-col items-between justify-between inside-card-container m-3">
        <img className="character-image rounded-3xl" src={image} alt="Rick" />
        <div className="shadow-on-name">
          <div className="flex character-name relative rounded-r-full -left-5 -top-5 bg-sky-50">
            <span className="mx-2 leading-8 font-semibold">{name}</span>
          </div>
        </div>
        <div className="flex flex-row items-start character-info-container">
          <div className="character-main-info shadow-md bg-opacity-10 rounded-md bg-black flex flex-col items-start w-9/12 px-2 py-1">
            <div className="character-status flex justify-between w-full">
              <span className="text-sm text-gray-700">Status</span>{" "}
              <strong>{status}</strong>
            </div>
            <div className="character-species flex justify-between w-full">
              <span className="text-sm text-gray-700">Species</span>{" "}
              <strong>{species}</strong>
            </div>
            <div className="character-gender flex justify-between w-full">
              <span className="text-sm text-gray-700">Gender</span>{" "}
              <strong>{gender}</strong>
            </div>
          </div>
          <button className="text-5xl mx-2 rounded-md font-semibold bg-yellow-100 text-gray-700 shadow-md  w-3/12 h-full hover:text-gray-900 hover:bg-yellow-50 transition ease-in-out duration-150">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
