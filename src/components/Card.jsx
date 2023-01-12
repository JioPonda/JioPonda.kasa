import React from "react";
import { Link } from "react-router-dom";
import "../css/components/Card.scss";

const Card = ({ property }) => {
  return (
    <div className="card_container">
      <Link to={`../data/logement/${property.id}`}>
        <div className="img_container">
          <img src={property.cover} alt="" />
          <div className="card_mask" />
        </div>
        <h3>{property.title}</h3>
      </Link>
    </div>
  );
};

export default Card;
