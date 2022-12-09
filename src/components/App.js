import Header from "./Heder";
import Footer from "./Footer.js";
import Main from "./Main";
import React from 'react';
import { useState } from "react";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from'../context/CurrentUserContext';
import { default as Api } from "../utils/Api.js";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopupp from "./EditAvatarPopup";
import AddProfilePopup from "./AddProfilePopup"
import PopupConfirm from"./PopupConfirm"
function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ link: "", name: "" });
  const [initialCards, setCardData] = React.useState([]);
  const [isLoadingSetUserInfo, setIsLoadingSetUserInfo] = React.useState(false);
  const [currentUser, setCurrentUser] =React.useState({});
  const [cardForDelete, setCardForDelete] = React.useState({})
  React.useEffect(()=>{
        Api.getUserInfo()
        .then((res)=>{
          setCurrentUser(res)
        })
    },[])
  React.useEffect(() => {
     Api.getMassCards()
      .then((data) => {
        setCardData(data)
      })
  }, []);
  function handleUpdateUser(data) {
    Api.editUserInfo(data)
      .then(
        (data) => {
          console.log(data)
          setCurrentUser(data);
          closeAllPopups();
        },
        (err) => {
          console.log(data)
          console.log(err);
        }
      )
  }
  function handleUpdateAvatar(data) {
    Api.editAvatar(data)
      .then(
        (data) => {
          console.log(data)
          setCurrentUser(data);
          closeAllPopups();
        },
        (err) => {
          console.log(data)
          console.log(err);
        }
      )
  }
  function handleCardClick(setLink, setName) {
    setSelectedCard({
      link: setLink,
      name: setName,
    });
    setIsCardPopupOpen(true);
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    Api.changeLikeCardStatus(card._id, isLiked)
      .then(
        (newCard) => {
          const newCards = initialCards.map((currentCard) => currentCard._id === card._id ? newCard : currentCard)
          setCardData(newCards);
        },
        (err) => {
          console.log(err);
        }
      )
  }
  function handleAddCardSubmit(data) {
    Api.addCard(data)
      .then(
        (newCard) => {
          setCardData([newCard, ...initialCards]);
          closeAllPopups();
        },
        (err) => {
          console.log(err);
        }
      )
  }
  function handleCardDelete(evt) {
    evt.preventDefault();
    Api.deleteCard(cardForDelete._id)
      .then(
        () => {
        const newCards = initialCards.filter((elem) => elem !== cardForDelete);
        setCardData(newCards);
        closeAllPopups();
        },
        (err) => {
          console.log(err);
        }
      )
  }
  function handleConfirmationClick(card) {
    setIsConfirmationPopupOpen(true);
    setCardForDelete(card)
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
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddProfile={handleAddPlaceClick}
        onAvatarProfile={handleEditAvatarClick}
        Cards={initialCards}
        handleConfirmationClick={handleConfirmationClick}
        handleCardClick={handleCardClick}
        handleCardLike={handleCardLike}
      />
      <Footer />
      <EditProfilePopup
        title="Редактировать профиль"
        name="edit"
        onOpen={isEditProfilePopupOpen}
        currentUser={currentUser}
        onUpdateUser={handleUpdateUser}
        isClose={closeAllPopups}
        buttonTitle="Сохранить"
      />
      <AddProfilePopup
        title="Добавить карточку"
        name="Add"
        onOpen={isAddPlacePopupOpen}
        onAddCard={handleAddCardSubmit}
        isClose={closeAllPopups}
        buttonTitle="Сохранить"
      />
      <EditAvatarPopupp
        title="Обновить аватар"
        name="Avatar"
        onUpdateAvatar={handleUpdateAvatar}
        onOpen={isEditAvatarPopupOpen}
        isClose={closeAllPopups}
        buttonTitle="Сохранить"
      />
      <PopupConfirm
        title="Вы уверены?"
        name="Confirmation"
        onOpen={isConfirmationPopupOpen}
        isClose={closeAllPopups}
        isOverlay={closeAllPopups}
        onSubmit={handleCardDelete}
        buttonTitle="Да"
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        onOpen={isCardPopupOpen}
      />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
