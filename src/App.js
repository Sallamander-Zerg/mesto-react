import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
     <header class="header">
        <img class="header__logo" src="<%=require('./images/logo.svg')%>" alt="лого"/>
    </header>
    <main class="content">
    <section className="profile">
        <p className="profile__button-block">
        <img className="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="аватар"/>
        <button type="button" class="profile__avatar-butt"  alt="аватар"></button>
        </p>
        <div className="profile__intro">
        <div className="profile__inline"><h1 className="profile__title">Жак-Ив Кусто</h1><button type="button"  className="profile__edit-button"  data-modal="edituser"></button></div>
        <p className="profile__text" >Исследования океана</p>
        </div>
        <button type="button"  className="profile__add-button"  data-modal="AddCard"></button>
    </section>
    <section className="elements"> 
      <template id="card"> <article className="element"><button class ="element__delete"></button><img class="element__photo" src="images/1.jpg" alt="замок" /><div class="element__description"><h2 class="element__header">Карачевск</h2><div class = "element__like-contaner"><button type="button" class="element__like-button"></button><span class="element__likes-number"></span></div></div></article></template>  
    </section>
  </main>
  <footer className="footer">
    <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
  </footer>
  
  <div className="popup js-popup-edit popup_type_edit"  data-modal="edituser">
    <div className="popup__container">
        <button type="button" className="popup__close-butoon js-close-button-edit"  data-modal="edituser"></button>
        <form className="popup__form js-popup-for-edit" name="form" id="formEdit">
          <h2 className="popup__title">Редактировать профиль</h2>
          <input name="fieldName" type="text" class="popup__field field-name" pattern="[0-9А-Яа-яa-zA-Z- ]{2,}" placeholder="Имя" minlength="2" maxlength="40" require/>
          <p className="popup__error-block">
          <span className="popup__field-error fieldName-error"></span>
          </p>
          <input name="fieldJob" type="text" className="popup__field field-job"pattern="[0-9А-Яа-яa-zA-Z- ]{2,}" placeholder="О себе" minlength="2" maxlength="200" required/>
          <p className="popup__error-block">
          <span className="popup__field-error fieldJob-error"></span>
          </p>
          <button type="submit"  className="popup__save-button" id="saveform">Сохранить</button>
        </form>
    </div>
  </div>
  <div className="popup js-popup-Add popup_type_card"  data-modal="AddCard">
    <div className="popup__container">
        <button type="button" className="popup__close-butoon js-close-butoon-add"  data-modal="AddCard"></button>
        <form className="popup__form js-popup-for-add" name="formAdd" id="formAdd"  >
          <h2 className="popup__title">Добавить карточку</h2>
          <input name="fieldMesto" type="text" class="popup__field field-alt"  placeholder="Название" pattern="[0-9А-Яа-яa-zA-Z- ]{2,}"  minlength="2" maxlength="30" required/>
          <p className="popup__error-block">
          <span className="popup__field-error fieldMesto-error"></span>
          </p>
          <input name="fieldSrc" type="url" class="popup__field field-src"  placeholder="Ссылка на картинку" required/>
          <p className="popup__error-block">
          <span className="popup__field-error fieldSrc-error"></span>
          </p>
          <button type="submit"  className="popup__save-button" id="Addsaveform">Сохранить</button>
        </form>
    </div>
  </div>
  <div className="popup  popup_bagraund-img js-popup-Img popup_type_card"  data-modal="ImgCard"> 
    <div className="popup__contaner-img">
      <button type="button" className="popup__close-butoon" id ="closeimg" data-modal="ImgCard"></button>
    <div className="popup__conent">
      <img className="popup__img"/>
      <div className="popup__name"></div>
    </div>
    </div>
  </div> 
  <div className="popup js-popup-avatar popup_type_edit-Avatar"  data-modal="edituser">
  <div className="popup__container">
    <button type="button" class="popup__close-butoon js-close-button-edit"  data-modal="edituser"></button>
    <form className="popup__form js-popup-avatar" name="form">
      <h2 className="popup__title">Обновить аватар</h2>
      <input name="fieldAvatarSrc" type="url" className="popup__field field-avatr-src"  placeholder="Ссылка на картинку" required/>
      <p className="popup__error-block">
      <span className="popup__field-error fieldAvatarSrc-error"></span>
      </p>
      <button type="submit"  className="popup__save-button popup__set-button">Сохранить</button>
    </form>
</div> 
</div>  
<div className="popup js-popup-answer"  data-modal="edituser">
  <div className="popup__container">
    <button type="button" className="popup__close-butoon js-close-button-popup-answer"  data-modal="edituser"></button>
    <form className="popup__form js-popup-avatar" name="form">
      <h2 className="popup__title">Вы уверены?</h2>
      <button type="submit"  className="popup__save-button popup__set-button">Да</button>
    </form>
</div> 
</div> 
    </div>
  );
}

export default App;
