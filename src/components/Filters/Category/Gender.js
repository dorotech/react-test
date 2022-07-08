import React from "react";
import FilterBtn from "../FilterBtn";

const Gender = ({ setPageNumber, setGender }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingGender">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseGender"
          aria-expanded="false"
          aria-controls="collapseGender"
        >
          Genders
        </button>
      </h2>
      <div
        id="collapseGender"
        className="accordion-collapse collapse"
        aria-labelledby="headingGender"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {genders.map((item, index) => (
            <FilterBtn
              setPageNumber={setPageNumber}
              task={setGender}
              name="genders"
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
