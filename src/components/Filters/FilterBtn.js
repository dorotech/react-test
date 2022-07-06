import React from "react";
import styles from "./FilterBtn.module.scss";

const FilterBtn = ({ task, setPageNumber, name, item, index }) => {
  return (
    <div className="form-check p-0">
      <input
        onClick={() => {
          setPageNumber(1);
          task(item);
        }}
        className={`${styles.input} form-check-input `}
        type="radio"
        name={name}
        id={`${name}-${index}`}
      />
      <label
        className={`${styles.label} col-12 btn border border-primary my-1`}
        for={`${name}-${index}`}
      >
        {item}
      </label>
    </div>
  );
};

export default FilterBtn;
