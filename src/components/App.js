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

  function onEditAvatarClick() {
    setIsEditAvatarPopupClick(true)
    //opacity.classList.add('page-opacity');
  }
  function onAddPlaceClick() {
    setIsAddPlacePopupClick(true)
    //opacity.classList.add('page-opacity');
  }
  function onEditProfileClick() {
    setIsEditProfileClick(true)
    //opacity.classList.add('page-opacity');
  }

  function closeAllPopups() {
    setIsEditAvatarPopupClick(false)
    setIsAddPlacePopupClick(false)
    setIsEditProfileClick(false)
  }

  return (
    <div className="page">
      <div id="opacity-block">
        <Header />
        <Main eventClicks={{onAddPlaceClick, onEditAvatarClick, onEditProfileClick}} />
        <Footer />
      </div>
      <PopupWithForm name="edit" title ="Editar Perfíl" popupState={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      <PopupWithForm name="image" title ="Novo Local" popupState={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <PopupWithForm name="picture" title ="Atualizar foto do perfil" popupState={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      <ImagePopup />
    </div>
  );
}