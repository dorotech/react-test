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
      <label className="col-12 btn btn-primary" for={`${name}-${index}`}>
        {item}
      </label>
    </div>
  );
};

export default FilterBtn;
