import React, { useState, useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap";

const CardModal = ({ id }) => {
  let [fetchData, updateFetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    //função imediatamente invocada
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  let { name, status, species, gender, origin, location, image } = fetchData;

  return (
    <div
      class="modal fade"
      id={`module${id}`}
      tabindex="-1"
      aria-labelledby={`module${id}`}
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id={`module${id}`}>
              {name}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="d-flex flex-column modal-body">
            <img src={image} className="img-fluid" alt="" />
            <div className="fs-5 m-2">Gender: {gender}</div>
            <div className="fs-5 m-2">Status: {status}</div>
            <div className="fs-5 m-2">Specie: {species}</div>
            <div className="fs-5 m-2">Location: {location?.name}</div>
            <div className="fs-5 m-2">Origin: {origin?.name}</div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
