import React from "react";
import CardModal from "./CardModal";
import styles from "./Cards.module.scss";

const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((result) => {
      let { id, name, image, status } = result;
      let badgeColor;
      switch (status) {
        case "Alive":
          badgeColor = "bg-success";
          break;
        case "Dead":
          badgeColor = "bg-danger";
          break;
        default:
          badgeColor = "bg-info";
      }
      return (
        <button
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative border-0 bg-transparent"
          key={id}
          data-bs-toggle="modal"
          data-bs-target={`#module${id}`}
        >
          <div className="d-flex flex-column justify-content-center border border-primary border-3 rounded">
            <img src={image} className="img-fluid" alt="" />
            <div
              className={`${styles.name} d-flex flex-column justify-content-center fs-3 m-2`}
            >
              {name}
            </div>
          </div>
          <div
            className={`${styles.badge} position-absolute badge ${badgeColor}`}
          >
            {status}
          </div>
          <CardModal id={id} />
        </button>
      );
    });
  } else {
    display = "No character found.";
  }
  return <>{display}</>;
};

export default Cards;
