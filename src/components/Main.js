import avatar from '../images/avatar.jpg';
import { CurrentUserContext } from'../context/CurrentUserContext';
import Card from './Card';
import React from 'react';
function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
     console.log(currentUser.about)
    return(
<main className="content">
<section className="profile">
    <p className="profile__button-block">
    <img className="profile__avatar" src={currentUser.avatar ? currentUser.avatar : avatar} alt="аватар"/>
    <button type="button" className="profile__avatar-butt"  alt="аватар" onClick={props.onAvatarProfile}></button>
    </p>
    <div className="profile__intro">
    <div className="profile__inline"><h1 className="profile__title">{currentUser.name ? currentUser.name : 'Жак-Ив Кусто'}</h1><button onClick={props.onEditProfile} type="button"  className="profile__edit-button"  data-modal="edituser"></button></div>
    <p className="profile__text" >{currentUser.about ? currentUser.about : 'Исследования океана'}</p>
    </div>
    <button type="button"  className="profile__add-button"  data-modal="AddCard" onClick={props.onAddProfile}></button>
</section>
<section className="elements">
{props.Cards.map(element=>{
    return(
        <Card
          key ={element._id}
          card = {element}
          onConfirmationProfile={props.handleConfirmationClick}
          onCardClick={props.handleCardClick}
          onCardLike={props.handleCardLike}
        />
)})
}
</section>
</main>

    );
}
export default Main