import { Character } from "../../models/responses/Character";

interface MoreStatsProps {
  character: Character;
}

const MoreStats = (props: MoreStatsProps) => {
  const { image, type, origin, location } = props.character;
  return (
    <div className="flex flex-col items-start character-extra-info shadow-md bg-opacity-10 rounded-md bg-black w-[296px] px-2 py-1 mt-3">
      <div className="flex justify-between w-full">
        <span className="text-sm text-gray-700 dark:text-sky-50 w-3/12 text-left">
          Type
        </span>{" "}
        <strong className="info-bold w-9/12">{type ? type : "unknown"}</strong>
      </div>
      <div className="flex justify-between w-full">
        <span className="text-sm text-gray-700 dark:text-sky-50 w-3/12 text-left">
          Origin
        </span>{" "}
        <strong className="info-bold w-9/12">
          {origin.name ? origin.name : "unknown"}
        </strong>
      </div>
      <div className="flex justify-between w-full">
        <span className="text-sm text-gray-700 dark:text-sky-50 w-3/12 text-left">
          Location
        </span>{" "}
        <strong className="info-bold w-9/12">{location.name}</strong>
      </div>
      <button
        className="btn my-1 py-2 w-full h-full"
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
