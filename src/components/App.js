import Header from "./Heder";
import Footer from "./Footer.js";
import Main from "./Main";
import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { useEffect, useState, setState } from "react";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
import { default as Api } from "../utils/Api.js";
function App(props) {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ link: "", name: "" });
  const [initialCards, setCardData] = React.useState([]);
  const [isLoadingInitialData, setIsLoadingInitialData] = React.useState(false);
  React.useEffect(() => {
    setIsLoadingInitialData(true);
     Api.getMassCards()
      .then((data) => {
        setCardData(data)
      })
  }, []);
  console.log(initialCards);

  function handleCardClick(setLink, setName) {
    console.log("напас");
    console.log(setLink, setName);
    setSelectedCard({
      link: setLink,
      name: setName,
    });
    setIsCardPopupOpen(true);
  }

  function handleConfirmationClick() {
    setIsConfirmationPopupOpen(true);
  }
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
    setIsConfirmationPopupOpen(false);
    setIsCardPopupOpen(false);
  }
  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddProfile={handleAddPlaceClick}
        onAvatarProfile={handleEditAvatarClick}
        Cards={
       initialCards.map(element=>{
        return( <Card
          key ={element._id}
          card = {element}
          onConfirmationProfile={handleConfirmationClick}
          onCardClick={handleCardClick}
        />)
       })
        }
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        isClose={closeAllPopups}
        isOverlay={closeAllPopups}
        childrens={
          <>
            <input
              name="fieldName"
              type="text"
              className="popup__field field-name"
              pattern="[0-9А-Яа-яa-zA-Z- ]{2,}"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <p className="popup__error-block">
              <span className="popup__field-error fieldName-error"></span>
            </p>
            <input
              name="fieldJob"
              type="text"
              className="popup__field field-job"
              pattern="[0-9А-Яа-яa-zA-Z- ]{2,}"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <p  className="popup__error-block">
              <span  className="popup__field-error fieldJob-error"></span>
            </p>
          </>
        }
        buttonTitle="Сохранить"
      />
      <PopupWithForm
        title="Добавить карточку"
        name="Add"
        isOpen={isAddPlacePopupOpen}
        isClose={closeAllPopups}
        isOverlay={closeAllPopups}
        childrens={
          <>
            <input
              name="fieldMesto"
              type="text"
              className="popup__field field-alt"
              placeholder="Название"
              pattern="[0-9А-Яа-яa-zA-Z- ]{2,}"
              minLength="2"
              maxLength="30"
              required
            />
            <p className="popup__error-block">
              <span className="popup__field-error fieldMesto-error"></span>
            </p>
            <input
              name="fieldSrc"
              type="url"
              className="popup__field field-src"
              placeholder="Ссылка на картинку"
              required
            />
            <p className="popup__error-block">
              <span className="popup__field-error fieldSrc-error"></span>
            </p>
          </>
        }
        buttonTitle="Сохранить"
      />
      <PopupWithForm
        title="Обновить аватар"
        name="Avatar"
        isOpen={isEditAvatarPopupOpen}
        isClose={closeAllPopups}
        isOverlay={closeAllPopups}
        childrens={
          <>
            {" "}
            <input
              name="fieldAvatarSrc"
              type="url"
              className="popup__field field-avatr-src"
              placeholder="Ссылка на картинку"
              required
            />
            <p className="popup__error-block">
              <span className="popup__field-error fieldAvatarSrc-error"></span>
            </p>
          </>
        }
        buttonTitle="Сохранить"
      />
      <PopupWithForm
        title="Вы уверены?"
        name="Confirmation"
        isOpen={isConfirmationPopupOpen}
        isClose={closeAllPopups}
        isOverlay={closeAllPopups}
        buttonTitle="Да"
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        onOpen={isCardPopupOpen}
        isOverlay={closeAllPopups}
      />
    </>
  );
}

export default App;
