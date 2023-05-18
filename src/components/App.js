import React from 'react'
import trashIconSrc from '../images/trash-icon.svg'
import likeIconSrc from '../images/vector__like-button.svg'
import exitIconSrc from '../images/vector__add.svg'

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm';

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
      <section className="image-click popup">
        <div className="image-click__block">
          <img src={exitIconSrc} className="image-click__exit" alt="Botão de fechar o pop-up" />
          <img className='image-click-open' alt="Imagem adicionada pelo usuário" />
          <p className="image-click__name"></p>
        </div>
      </section>
      <template className="default-template">
        <div className="item">
          <img className="item__image" src="#" alt="Imagem adicionada pelo usuário" />
          <img src={trashIconSrc} className="item__trash-icon" id="form-confirmation-trigger" alt="Ícone de lixo, para excluir a foto desejada" />
          <div className="item__container">
            <h1 className="item__title"></h1>
            <div>
              <img src={likeIconSrc} className="item__like" alt="Um coração com a função de curtir a imagem" />
              <p className="item__likes">0</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}