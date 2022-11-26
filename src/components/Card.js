import { useEffect, useState } from "react";
import { default as Api } from "../utils/Api.js";
const Card = (props) => {
  const [initialCards, Setcarddata] = useState(0);
  useEffect(() => {
    Api.getMassCards().then((res) => {
      Setcarddata(
        res.map(function (Card) {
          return (
            <article class="element" key={Card.id}>
              <button
                class="element__delete"
                onClick={props.onConfirmationProfile}
              ></button>
              <img
                class="element__photo"
                src={Card.link ? Card.link : "ошибка"}
                alt={Card.name ? Card.name : "ошибка"}
                onClick={()=>{
                  props.onCardClick(Card.link,Card.name)
                }}
              />
              <div class="element__description">
                <h2 class="element__header">
                  {Card.name ? Card.name : "ошибка"}
                </h2>
                <div class="element__like-contaner">
                  <button type="button" class="element__like-button"></button>
                  <span class="element__likes-number">{Card.likes.length}</span>
                </div>
              </div>
            </article>
          );
        })
      );
    });
  }, []);
  console.log(initialCards);
  return <section className="elements">{initialCards}</section>;
};
export default Card;
