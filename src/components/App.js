import React from 'react'

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'

export default function App() {

  const [isEditProfilePopupOpen, setIsEditProfileClick] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupClick] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupClick] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState('')

  function handleCardClick(evt) {
    const cardElement = evt.target.parentElement
    setSelectedCard(cardElement)
  }

  function onEditAvatarClick() {
    setIsEditAvatarPopupClick(true)
  }
  function onAddPlaceClick() {
    setIsAddPlacePopupClick(true)
  }
  function onEditProfileClick() {
    setIsEditProfileClick(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupClick(false)
    setIsAddPlacePopupClick(false)
    setIsEditProfileClick(false)
    setSelectedCard('')
  }

  return (
    <div className="page">
      <div id="opacity-block">
        <Header />
        <Main eventClicks={{onAddPlaceClick, onEditAvatarClick, onEditProfileClick, handleCardClick}} />
        <Footer />
      </div>
      <PopupWithForm name="edit" title ="Editar Perfíl" popupState={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      <PopupWithForm name="image" title ="Novo Local" popupState={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <PopupWithForm name="picture" title ="Atualizar foto do perfil" popupState={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}