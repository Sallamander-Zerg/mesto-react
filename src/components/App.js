import Header from "./Heder";
import Footer from "./Footer.js";
import Main from "./Main";
import React from 'react';
import { useState } from "react";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from'../context/CurrentUserContext';
import { default as Api } from "../utils/Api.js";
import {BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopupp from "./EditAvatarPopup";
import AddProfilePopup from "./AddProfilePopup"
import PopupConfirm from"./PopupConfirm"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import ProtectedRoute from "./ProtectedRoute";
import Auth from "../utils/auth"
function App() {
  const [loggedIn, setSignIn] = React.useState(false);
  const [isSuccessSignUp, setIsSuccessSignUp] = React.useState(false);
  const [authorizationUserEmail, setAutorizationUserEmail] = React.useState(null);
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
  const history = useHistory();
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
  function handleSingOut() {
    setSignIn(false);
    localStorage.removeItem('jwt');
    history.push('/sign-in');
  }
  function handleRegistration(data) {
    Auth.Register(data)
      .then(
        (data) => {
          setIsSuccessSignUp(true);
          history.push('/sign-in')
        },
        (err) => {
          console.log(err);
          setIsSuccessSignUp(false);
          // handleInfoTooltipPopupOpen();
        })
  }

  function handleAuthorization(data) {
    Auth.Login(data)
      .then(
        (data) => {
          setSignIn(true);
          localStorage.setItem('jwt', data.token);
          history.push("/");
          handleCheckToken();
        },
        (err) => {
          console.log(err);
        }
      )
  }

  const handleCheckToken = React.useCallback(
    () => {
      const token = localStorage.getItem('jwt');
      Auth.checkToken(token)
        .then(
          (data) => {
            setAutorizationUserEmail(data.data.email);
            setSignIn(true);
            history.push("/");
          },
          (err) => {
            console.log(err);
          }
        )

    },
    [history],
  )

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');

    if (token) {
      handleCheckToken();
    }
  }, [handleCheckToken])
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
      <Header/>
      {/* <BrowserRouter>
      <Switch>
        <Route path="/sign-up">
          <SignUp
            onRegistration={handleRegistration}
            title="??????????????????????"
            name="Rergistration"
            buttonTitle="????????????????????????????????????"
          />
        </Route>
        <Route path="/sign-in">
          <SignIn
            onAuthorization={handleAuthorization}
            onCheckToken={handleCheckToken}
            title="??????????"
            name="Login"
            buttonTitle="??????????"
          />
        </Route>
        <ProtectedRoute
          path="/"
          component={Main}
          loggedIn={loggedIn}
          onEditProfile={handleEditProfileClick}
          onAddProfile={handleAddPlaceClick}
          onAvatarProfile={handleEditAvatarClick}
          Cards={initialCards}
          handleConfirmationClick={handleConfirmationClick}
          handleCardClick={handleCardClick}
          handleCardLike={handleCardLike}
        />
      </Switch>
      </BrowserRouter> */}
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
        title="?????????????????????????? ??????????????"
        name="edit"
        onOpen={isEditProfilePopupOpen}
        currentUser={currentUser}
        onUpdateUser={handleUpdateUser}
        isClose={closeAllPopups}
        buttonTitle="??????????????????"
      />
      <AddProfilePopup
        title="???????????????? ????????????????"
        name="Add"
        onOpen={isAddPlacePopupOpen}
        onAddCard={handleAddCardSubmit}
        isClose={closeAllPopups}
        buttonTitle="??????????????????"
      />
      <EditAvatarPopupp
        title="???????????????? ????????????"
        name="Avatar"
        onUpdateAvatar={handleUpdateAvatar}
        onOpen={isEditAvatarPopupOpen}
        isClose={closeAllPopups}
        buttonTitle="??????????????????"
      />
      <PopupConfirm
        title="???? ???????????????"
        name="Confirmation"
        onOpen={isConfirmationPopupOpen}
        isClose={closeAllPopups}
        isOverlay={closeAllPopups}
        onSubmit={handleCardDelete}
        buttonTitle="????"
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
