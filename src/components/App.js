import Header from "./Heder";
import Footer from "./Footer.js";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import { useEffect, useState } from "react";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
import { default as Api } from "../utils/Api.js";
function App(props) {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [isCardPopupOpen,setIsCardPopupOpen]=useState(false);
  const [selectedCard, setSelectedCard] = useState({link:'',name:''});
  function handleCardClick(setLink,setName) {
    console.log("напас")
    console.log(setLink,setName)
    setSelectedCard(
      {
      link:setLink,
      name:setName
    });
    setIsCardPopupOpen(true)
  } 
  const [initialCards, Setcarddata] = useState(0);
  useEffect(() => {
    Api.getMassCards().then((res) => {
      Setcarddata(
        res.map(function (Card) {
          return (
            <article class="element" key={Card.id}>
              <button
                class="element__delete"
                onClick={()=>{handleConfirmationClick()}}
              ></button>
              <img
                class="element__photo"
                src={Card.link ? Card.link : "ошибка"}
                alt={Card.name ? Card.name : "ошибка"}
                onClick={()=>{
                  handleCardClick(Card.link,Card.name)
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
          <Card
            onConfirmationProfile={handleConfirmationClick}
            onCardClick={handleCardClick}
            initialCards={initialCards}
          />
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
              class="popup__field field-name"
              pattern="[0-9А-Яа-яa-zA-Z- ]{2,}"
              placeholder="Имя"
              minlength="2"
              maxlength="40"
              required
            />
            <p class="popup__error-block">
              <span class="popup__field-error fieldName-error"></span>
            </p>
            <input
              name="fieldJob"
              type="text"
              class="popup__field field-job"
              pattern="[0-9А-Яа-яa-zA-Z- ]{2,}"
              placeholder="О себе"
              minlength="2"
              maxlength="200"
              required
            />
            <p class="popup__error-block">
              <span class="popup__field-error fieldJob-error"></span>
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
              class="popup__field field-alt"
              placeholder="Название"
              pattern="[0-9А-Яа-яa-zA-Z- ]{2,}"
              minlength="2"
              maxlength="30"
              required
            />
            <p class="popup__error-block">
              <span class="popup__field-error fieldMesto-error"></span>
            </p>
            <input
              name="fieldSrc"
              type="url"
              class="popup__field field-src"
              placeholder="Ссылка на картинку"
              required
            />
            <p class="popup__error-block">
              <span class="popup__field-error fieldSrc-error"></span>
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
              class="popup__field field-avatr-src"
              placeholder="Ссылка на картинку"
              required
            />
            <p class="popup__error-block">
              <span class="popup__field-error fieldAvatarSrc-error"></span>
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
        ButtonTitle="Да"
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} onOpen={isCardPopupOpen} isOverlay={closeAllPopups} />
    </>
  );
}

export default App;
