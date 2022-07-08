import React from "react";
import FilterBtn from "../FilterBtn";

const Species = ({ setPageNumber, setSpecies }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingSpecies">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSpecies"
          aria-expanded="false"
          aria-controls="collapseSpecies"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseSpecies"
        className="accordion-collapse collapse"
        aria-labelledby="headingSpecies"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {species.map((item, index) => (
            <FilterBtn
              task={setSpecies}
              setPageNumber={setPageNumber}
              name="species"
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
