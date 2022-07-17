import { Character } from "../../models/responses/Character";

interface MoreStatsProps {
  character: Character;
}
// TODO: Fiz big names to fit in the card like in card.tsx TODO
const MoreStats = (props: MoreStatsProps) => {
  const { image, type, origin, location } = props.character;
  return (
    <div className="flex flex-col items-start character-extra-info shadow-md bg-opacity-10 rounded-md bg-black w-full px-2 py-1 mt-3">
      <div className="flex justify-between w-full">
        <span className="text-sm text-gray-700">Type</span>{" "}
        <strong className="text-gray-700 leading-5">
          {type ? type : "unknown"}
        </strong>
      </div>
      <div className="flex justify-between w-full">
        <span className="text-sm text-gray-700">Origin</span>{" "}
        <strong className="text-gray-700 leading-5">
          {origin.name ? origin.name : "unknown"}
        </strong>
      </div>
      <div className="flex justify-between w-full">
        <span className="text-sm text-gray-700">Location</span>{" "}
        <strong className="text-gray-700 leading-5">{location.name}</strong>
      </div>
      <button
        className="my-1 py-2 rounded-md font-semibold bg-yellow-100 text-gray-700 shadow-md  w-full h-full hover:text-gray-900 hover:bg-yellow-50 transition ease-in-out duration-150"
        type="button"
        onClick={() => {
          window.open(image, "_blank", "noopener,noreferrer");
        }}
      >
        View image in new tab
      </button>
    </div>
  );
};

export default MoreStats;
