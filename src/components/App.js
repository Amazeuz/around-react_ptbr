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
    const cardElement = evt.target.parentElement;
    const cardImage = cardElement.querySelector(".item__image").src;
    const cardName = cardElement.querySelector(".item__title").textContent;
    setSelectedCard({ cardImage, cardName })
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
    api.editUserInfo(data).then(result => {
      setCurrentUser(prev => ({...prev, name: result.name, about: result.about}))
    })

    closeAllPopups()
  }

  const isValidUrl = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+
    '(\\#[-a-z\\d_]*)?$','i');
    return !!urlPattern.test(urlString);
  }

  function handleUpdateAvatar(avatar) {
    if (isValidUrl(avatar)) {
      api.changeProfilePicture(avatar).then(result => {
        setCurrentUser(prev =>  ({...prev, avatar: result.avatar}))
      })
      closeAllPopups()
    }
    else {
      alert(`
        Digite uma URL válida !

        Exemplo de URL: https://exemplo.com
      `)
    }
  }

  function handleAddPlaceSubmit(name, link) {
    if (name.replace(/ /g,'').length > 0 && isValidUrl(link)) {
      api.addServerCard(name, link.replace(/ /g,'')).then(newCard => {
        console.log(newCard)
        setCards([newCard, ...cards])
      })
      closeAllPopups()
    }
    else {
      alert(`
      Digite valores válidos !

      Exemplo de URL: https://exemplo.com
      `)
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className={pageOpacity ? 'page-opacity' : ''} id="opacity-block">
          <Header />
          <Main
            onAddPlaceClick={onAddPlaceClick}
            onEditAvatarClick={onEditAvatarClick}
            onEditProfileClick={onEditProfileClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cardList={cards}
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