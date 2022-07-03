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
          badgeColor = "bg-secondary";
      }
      return (
        <div
          key={id}
          className="col-lg-4 col-md-6 col-12 position-relative mb-4"
        >
          <button
            className="border border-none bg-transparent"
            data-bs-toggle="modal"
            data-bs-target={`#module${id}`}
          >
            <div className="border border-primary border border-3 rounded">
              <img src={image} className="img-fluid" alt="" />
              <div className="fs-3 m-2">{name}</div>
            </div>
            <div
              className={`${styles.badge} badge ${badgeColor} position-absolute`}
            >
              {status}
            </div>
          </button>
          <CardModal id={id} />
        </div>
      );
    });
  } else {
    display = "No character found.";
  }
  return <>{display}</>;
};

export default Cards;
