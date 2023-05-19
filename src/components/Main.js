import React from 'react';
import openEditPopupSrc from '../images/vector__edit.svg'
import openAddPopupSrc from '../images/vector__add.svg'
import photoEditIcon from '../images/profile-photo-edit.svg'
import trashIconSrc from '../images/trash-icon.svg'
import likeIconSrc from '../images/vector__like-button.svg'
import { api } from '../utils/Api';

function Main(props) {
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])
  console.log('MAIN CHAMADO')

  api.loadUserInfo().then(data => {
    setUserName(data.name)
    setUserAvatar(data.avatar)
    setUserDescription(data.about)
  })

  React.useEffect(() => {
    api.getServerCards().then(data => {
      setCards(data)
    })
  }, [])


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img className="profile__photo" onClick={props.eventClicks.onEditAvatarClick} src={userAvatar} id="form-picture-trigger" alt="Foto de perfil do usuário" />
          <img src={photoEditIcon} className="profile__edit-button" alt="Ícone de Edição da imagem de perfil" />
        </div>
        <div className="profile-info">
          <div>
            <h1 className="profile__name">{userName}</h1>
            <img src={openEditPopupSrc} className="profile__edit" onClick={props.eventClicks.onEditProfileClick} id="form-edit-trigger" alt="Botão de edição dos campos Nome e Sobre" />
          </div>
          <h2 className="profile__about">{userDescription}</h2>
        </div>
        <img src={openAddPopupSrc} className="profile__add" onClick={props.eventClicks.onAddPlaceClick} id="form-image-trigger" alt="Botão de adicionar imagens á galeria" />
      </section>
      <section className="gallery">
        {cards.map((card, i) => (
            <div className="item" key={i}>
              <img className="item__image" src={`${card.link}`} alt="Imagem adicionada pelo usuário" />
              <img src={trashIconSrc} className="item__trash-icon" id="form-confirmation-trigger" alt="Ícone de lixo, para excluir a foto desejada" />
              <div className="item__container">
                <h1 className="item__title">{card.name}</h1>
                <div>
                  <img src={likeIconSrc} className="item__like" alt="Um coração com a função de curtir a imagem" />
                  <p className="item__likes">0</p>
                </div>
              </div>
            </div>
          ))
        }
      </section>
    </main>
  );
}

export default Main;