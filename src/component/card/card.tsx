import "./card.scss";

const Card = () => {
  return (
    <div className="flex bg-yellow-50 shadow-md rounded-3xl w-2/12 mx-3 my-3">
      <div className="inside-card-container m-3">
        <img
          className="character-image rounded-3xl"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
        />
        <div className="shadow-on-name">
          <div className="flex character-name bg-sky-50">
            <span className="mx-2 leading-8 font-semibold">Rick Sanchez</span>
          </div>
        </div>
        <div className="character-status">Alive</div>
        <div className="character-species">Human</div>
        <div className="character-gender">Male</div>
      </div>
    </div>
  );
};

export default Card;
