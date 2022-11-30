import { useEffect, useState } from "react";
const Card = (props) => {
  console.log(props.card)
  return(
    <article class="element" key={props.card.id}>
    <button
      class="element__delete"
      onClick={props.onConfirmationProfile}
    ></button>
    <img
      class="element__photo"
      src={props.card.link ? props.card.link : "ошибка"}
      alt={props.card.name ? props.card.name : "ошибка"}
      onClick={()=>{
        props.onCardClick(props.card.link,props.card.name)
      }}
    />
    <div class="element__description">
      <h2 class="element__header">
        {props.card.name ? props.card.name : "ошибка"}
      </h2>
      <div class="element__like-contaner">
        <button type="button" class="element__like-button"></button>
        <span class="element__likes-number">{props.card.likes.length}</span>
      </div>
    </div>
  </article>
);
};
export default Card;
