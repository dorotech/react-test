import { Character } from "../../models/responses/Character";
import "./card.scss";
import {
  faArrowDownShortWide,
  faArrowUpShortWide,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoreStats from "../moreStats/moreStats";
import { useState } from "react";

interface CardProps {
  character: Character;
}

// TODO: Fix text alignment of status, species, and origin
// TODO: Fix name breaking layout when too long
const Card = (props: CardProps) => {
  const { name, status, species, gender, image } = props.character;
  const [isExtraInfoOpen, setIsExtraInfoOpen] = useState(false);
  return (
    <div className="flex bg-yellow-50 bg-opacity-50 dark:bg-opacity-10 shadow-md rounded-3xl mx-3 my-3">
      <div className="flex flex-col items-between justify-between m-3">
        <img className="character-image rounded-3xl" src={image} alt="Rick" />
        <div className="shadow-on-name">
          <div className="flex character-name relative rounded-r-full -left-5 -top-5 bg-sky-50 dark:bg-gray-900 dark:text-yellow-100">
            <span className="mx-2 leading-8 font-semibold text-gray-700 dark:bg-gray-900 dark:text-yellow-100">
              {name}
            </span>
          </div>
        </div>
        <div className="flex flex-row items-start character-info-container">
          <div className="character-main-info shadow-md bg-opacity-10 rounded-md bg-black flex flex-col items-start w-9/12 px-2 py-1">
            <div className="character-status flex justify-between w-full">
              <span className="text-sm text-gray-700 dark:text-sky-50">
                Status
              </span>{" "}
              <strong className="text-gray-700 dark:text-sky-50 leading-5">
                {status}
              </strong>
            </div>
            <div className="character-species flex justify-between w-full">
              <span className="text-sm text-gray-700 dark:text-sky-50">
                Species
              </span>{" "}
              <strong className="text-gray-700 dark:text-sky-50 leading-5">
                {species}
              </strong>
            </div>
            <div className="character-gender flex justify-between w-full">
              <span className="text-sm text-gray-700 dark:text-sky-50">
                Gender
              </span>{" "}
              <strong className="text-gray-700 dark:text-sky-50 leading-5">
                {gender}
              </strong>
            </div>
          </div>
          <button
            className="btn text-4xl mx-2 0 w-3/12 h-full"
            type="button"
            onClick={() => {
              setIsExtraInfoOpen(!isExtraInfoOpen);
            }}
          >
            {isExtraInfoOpen ? (
              <FontAwesomeIcon icon={faArrowUpShortWide} />
            ) : (
              <FontAwesomeIcon icon={faArrowDownShortWide} />
            )}
          </button>
        </div>
        {isExtraInfoOpen && <MoreStats character={props.character} />}
      </div>
    </div>
  );
};

export default Card;
