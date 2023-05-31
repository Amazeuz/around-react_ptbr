import React, { useState, useEffect } from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js'
import EditProfilePopup from './EditProfilePopup.js'
import EditAvatarPopup from './EditAvatarPopup.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js'

export default function App() {

  const [cards, setCards] = useState([])
  const [currentUser, setCurrentUser] = useState('')
  const [isEditProfilePopupOpen, setIsEditProfileClick] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupClick] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupClick] = useState(false)
  const [pageOpacity, setPageOpacity] = useState(false);
  const [selectedCard, setSelectedCard] = useState('')

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.toggleCardLike(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    setCards(cards.filter(c => c._id !== card._id))
  }

  useEffect(() => {
    api.getServerCards().then(data => {
      setCards(data)
    })
  }, [])

  useEffect(() => {
    api.loadUserInfo().then((data) => {
      setCurrentUser(data)
    });
  }, []);

  function handleCardClick(evt) {
    const cardElement = evt.target.parentElement
    setSelectedCard(cardElement)
    setPageOpacity(true)
  }

  function onEditAvatarClick() {
    setIsEditAvatarPopupClick(true)
    setPageOpacity(true)
  }

  function onAddPlaceClick() {
    setIsAddPlacePopupClick(true)
    setPageOpacity(true)
  }

  function onEditProfileClick() {
    setIsEditProfileClick(true)
    setPageOpacity(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupClick(false)
    setIsAddPlacePopupClick(false)
    setIsEditProfileClick(false)
    setSelectedCard('')
    setPageOpacity(false)
  }

  function handleUpdateUser(data) {
    api.editUserInfo(data)
    currentUser.name = data.name
    currentUser.about = data.about
    closeAllPopups()
  }

  function handleUpdateAvatar(avatar) {
    api.changeProfilePicture(avatar)
    currentUser.avatar = avatar;
    closeAllPopups()
  }

  function handleAddPlaceSubmit(name, link) {
    api.addServerCard(name, link).then(newCard => {
      setCards([newCard, ...cards])
    })
    closeAllPopups()
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className={pageOpacity ? 'page-opacity' : ''} id="opacity-block">
          <Header />
          <Main eventClicks={{onAddPlaceClick, onEditAvatarClick, onEditProfileClick, handleCardClick}}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cardList={cards}
            currentUser={currentUser}
          />
          <Footer />
        </div>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateCards={handleAddPlaceSubmit} cardList={cards} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  );
}