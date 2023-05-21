import React, { useState } from 'react'

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'

export default function App() {

  const [isEditProfilePopupOpen, setIsEditProfileClick] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupClick] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupClick] = useState(false)
  const [pageOpacity, setPageOpacity] = useState(false);
  const [selectedCard, setSelectedCard] = useState('')

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

  return (
    <div className="page">
      <div className={pageOpacity ? 'page-opacity' : ''} id="opacity-block">
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