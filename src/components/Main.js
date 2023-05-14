import React from 'react';
import openEditPopupSrc from '../images/vector__edit.svg'
import openAddPopupSrc from '../images/vector__add.svg'
import photoEditIcon from '../images/profile-photo-edit.svg'

function Main(props) {
  function handleEditAvatarClick() {
    const popupElement = document.querySelector('#form-picture')
    popupElement.classList.add('popup_is-opened');
  }

  function handleAddPlaceClick() {
    const popupElement = document.querySelector('#form-image')
    popupElement.classList.add('popup_is-opened');
  }

  function handleEditProfileClick() {
    const popupElement = document.querySelector('#form-edit')
    popupElement.classList.add('popup_is-opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img className="profile__photo" onClick={handleEditAvatarClick} id="form-picture-trigger" alt="Foto de perfil do usuário" />
          <img src={photoEditIcon} className="profile__edit-button" alt="Ícone de Edição da imagem de perfil" />
        </div>
        <div className="profile-info">
          <div>
            <h1 className="profile__name"></h1>
            <img src={openEditPopupSrc} className="profile__edit" onClick={handleEditProfileClick} id="form-edit-trigger" alt="Botão de edição dos campos Nome e Sobre" />
          </div>
          <h2 className="profile__about">Explorar</h2>
        </div>
        <img src={openAddPopupSrc} className="profile__add" onClick={handleAddPlaceClick} id="form-image-trigger" alt="Botão de adicionar imagens á galeria" />
      </section>
      <section className="gallery">
      </section>
    </main>
  );
}

export default Main;

/*function handleEditAvatarClick() {
  let popupElement = document.querySelector('#form-picture')
  popupElement = new PopupWithForm(popupElement, (inputValue) =>  {
    //api.changeProfilePicture(inputValue);
    //profilePhoto.src = inputValue[0];
  })

  popupElement.setEventListeners();
  popupElement.getTriggerElement().addEventListener('click', () => {
    popupElement.open()
  })
}
function addNewCard() {
  console.log('new card criado')
}

function handleAddPlaceClick() {
  let popupElement = document.querySelector('#form-image')
  popupElement = new PopupWithForm(popupElement, addNewCard)
  popupElement.setEventListeners();
  popupElement.getTriggerElement().addEventListener('click', () => {
    popupElement.open()
  })
}

function handleEditProfileClick() {
  let popupElement = document.querySelector('#form-edit')
  popupElement = new PopupWithForm(popupElement, (inputs) => {
    //api.editUserInfo(inputs)

    //const userInfo = new UserInfo(inputs)
    //userInfo.setUserInfo()
  })
  popupElement.setEventListeners();
  popupElement.getTriggerElement().addEventListener('click', () => {
    popupElement.open()
  })
}*/