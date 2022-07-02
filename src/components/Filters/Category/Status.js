import React from "react";
import FilterBtn from "../FilterBtn";

const Status = ({ setStatus, setPageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingStatus">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseStatus"
          aria-expanded="false"
          aria-controls="collapseStatus"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseStatus"
        className="accordion-collapse collapse"
        aria-labelledby="headingStatus"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {status.map((item, index) => (
            <FilterBtn
              task={setStatus}
              setPageNumber={setPageNumber}
              name="status"
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
