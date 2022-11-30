import { useEffect, useState } from 'react';
import avatar from '../images/avatar.jpg';
import {default as Api} from '../utils/Api.js'
import Card from './Card';
function Main(props) {
    const[userData,Setuserdata]= useState(0)
    useEffect(()=>{
        Api.getUserInfo()
        .then((res)=>{
            Setuserdata(res)
        })
    },[])
    return(
<main className="content">
<section className="profile">
    <p className="profile__button-block">
    <img className="profile__avatar" src={userData.avatar ? userData.avatar : avatar} alt="аватар"/>
    <button type="button" className="profile__avatar-butt"  alt="аватар" onClick={props.onAvatarProfile}></button>
    </p>
    <div className="profile__intro">
    <div className="profile__inline"><h1 className="profile__title">{userData.name ? userData.name : 'Жак-Ив Кусто'}</h1><button onClick={props.onEditProfile} type="button"  class="profile__edit-button"  data-modal="edituser"></button></div>
    <p className="profile__text" >{userData.about ? userData.about : 'Исследования океана'}</p>
    </div>
    <button type="button"  className="profile__add-button"  data-modal="AddCard" onClick={props.onAddProfile}></button>
</section>
<section className="elements">
{props.Cards}
</section>
</main>

    );
}
export default Main