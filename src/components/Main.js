import avatar from '../images/avatar.jpg';
function Main(props) {
    return(
<main className="content">
<section className="profile">
    <p className="profile__button-block">
    <img className="profile__avatar" src={avatar} alt="аватар"/>
    <button type="button" className="profile__avatar-butt"  alt="аватар" onClick={props.onAvatarProfile}></button>
    </p>
    <div className="profile__intro">
    <div className="profile__inline"><h1 className="profile__title">Жак-Ив Кусто</h1><button onClick={props.onEditProfile} type="button"  class="profile__edit-button"  data-modal="edituser"></button></div>
    <p className="profile__text" >Исследования океана</p>
    </div>
    <button type="button"  className="profile__add-button"  data-modal="AddCard" onClick={props.onAddProfile}></button>
</section>
<section className="elements"> 
  <template id="card"> <article className="element"><button className ="element__delete"></button><img className="element__photo" src="images/1.jpg" alt="замок" /><div className="element__description"><h2 className="element__header">Карачевск</h2><div className = "element__like-contaner"><button type="button" className = "element__like-button"></button><span className = "element__likes-number"></span></div></div></article></template>  
</section>
</main>

    );
}
export default Main