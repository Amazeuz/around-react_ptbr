import React, { useState, useEffect} from 'react';
import openEditPopupSrc from '../images/vector__edit.svg'
import openAddPopupSrc from '../images/vector__add.svg'
import photoEditIcon from '../images/profile-photo-edit.svg'
import Card from './Card';
import { api } from '../utils/Api';

function Main(props) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    api.loadUserInfo().then((data) => {
      setUserName(data.name);
      setUserAvatar(data.avatar);
      setUserDescription(data.about);
    });
  }, []);

  useEffect(() => {
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
          <Card key={i} name={card.name} link={card.link} likes={card.likes} onCardClick={props.eventClicks.handleCardClick}/>
          ))
        }
      </section>
    </main>
  );
}

export default Main;