import Header from './Heder';
import Footer from './Footer.js';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import  '../utils/Api';
function App() {
  Promise.all([cards,user])
  .then(([initialCards, userData]) => {
    console.log(initialCards)
    console.log(userData)
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    // const [card,]
    // const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
    // function handleConfirmationClick() {
    //   setIsConfirmationPopupOpen(true);
    //   }
    function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    }
    function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    }
  return (
    <>
    <Header/>
    <Main onEditProfile={handleEditProfileClick} onAddProfile={handleAddPlaceClick} onAvatarProfile={handleEditAvatarClick}/>
    <Footer/>
    <PopupWithForm title = "Редактировать профиль" name="edit" isOpen = {isEditProfilePopupOpen} isClose={closeAllPopups} Overlay={closeAllPopups}
      childrens ={<><input name="fieldName" type="text" class="popup__field field-name" pattern="[0-9А-Яа-яa-zA-Z- ]{2,}" placeholder="Имя" minlength="2" maxlength="40" required/>
        <p class="popup__error-block">
        <span class="popup__field-error fieldName-error"></span>
        </p>
      <input name="fieldJob" type="text" class="popup__field field-job"pattern="[0-9А-Яа-яa-zA-Z- ]{2,}" placeholder="О себе" minlength="2" maxlength="200" required/>
        <p class="popup__error-block">
        <span class="popup__field-error fieldJob-error"></span>
        </p></>}/>
    <PopupWithForm title = "Добавить карточку" name="Add" isOpen = {isAddPlacePopupOpen} isClose={closeAllPopups} Overlay={closeAllPopups}
      childrens ={<><input name="fieldMesto" type="text" class="popup__field field-alt"  placeholder="Название" pattern="[0-9А-Яа-яa-zA-Z- ]{2,}"  minlength="2" maxlength="30" required/>
      <p class="popup__error-block">
      <span class="popup__field-error fieldMesto-error"></span>
      </p>
      <input name="fieldSrc" type="url" class="popup__field field-src"  placeholder="Ссылка на картинку" required/>
      <p class="popup__error-block">
      <span class="popup__field-error fieldSrc-error"></span>
      </p></>}/>
      <PopupWithForm title = "Обновить аватар" name="Avatar" isOpen = {isEditAvatarPopupOpen} isClose={closeAllPopups} Overlay={closeAllPopups}
      childrens ={<> <input name="fieldAvatarSrc" type="url" class="popup__field field-avatr-src"  placeholder="Ссылка на картинку" required/>
      <p class="popup__error-block">
      <span class="popup__field-error fieldAvatarSrc-error"></span>
      </p></>}/>
    </>
  );
}

export default App
