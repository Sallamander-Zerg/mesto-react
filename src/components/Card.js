import { useEffect, useState } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import React from 'react';
const Card = (props) => {
const currentUser = React.useContext(CurrentUserContext);
const isOwn = props.card.owner._id === currentUser._id;
const isLiked = props.card.likes.some(i => i._id === currentUser._id);
const cardDeleteButtonClassName = (isOwn ? 'element__delete' : 'element__delete_hidden'); 
const cardLikeButtonClassName = (isLiked ? 'element__like-button element__like-button_active' : 'element__like-button'); 
function handleLikeClick() {
  props.onCardLike(props.card);
}

function handleDeleteRequest() {
  props.onCardDeleteRequest(props.card);
}
  return(
    <article className="element" key={props.card._id}>
    <button
      className={cardDeleteButtonClassName}
      onClick={()=>{
        props.onConfirmationProfile(props.card)
      }}
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
        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        <span className="element__likes-number">{props.card.likes.length}</span>
      </div>
    </div>
  </article>
);
};
export default Card;
