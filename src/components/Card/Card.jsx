import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="box btn_shadow">
      <div className="img-wrapper">
        {/* Lazy loading the image */}
        <img src={props.image} alt={props.title} loading="lazy" className="img"/>
      </div>
      <div className="category1">
        <h2>{props.title}</h2>
        <p>{props.price}</p>
      </div>
    </div>
  );
};
export default Card;