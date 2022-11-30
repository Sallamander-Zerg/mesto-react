import { useEffect, useState } from "react";
const Card = (props) => {
  console.log(props.card)
  return(
    <article className="element" key={props.card.id}>
    <button
      className="element__delete"
      onClick={props.onConfirmationProfile}
    ></button>
    <img
      className="element__photo"
      src={props.card.link ? props.card.link : "ошибка"}
      alt={props.card.name ? props.card.name : "ошибка"}
      onClick={()=>{
        props.onCardClick(props.card.link,props.card.name)
      }}
    />
    <div className="element__description">
      <h2 className="element__header">
        {props.card.name ? props.card.name : "ошибка"}
      </h2>
      <div className="element__like-contaner">
        <button type="button" className="element__like-button"></button>
        <span className="element__likes-number">{props.card.likes.length}</span>
      </div>
    </div>
  </article>
);
};
export default Card;
