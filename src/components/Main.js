import React, { useState, useEffect, useContext} from 'react';
import openEditPopupSrc from '../images/vector__edit.svg'
import openAddPopupSrc from '../images/vector__add.svg'
import photoEditIcon from '../images/profile-photo-edit.svg'
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';

function Main(props) {
  const [cards, setCards] = useState([])
  const currentUser = useContext(CurrentUserContext)

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

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img className="profile__photo" onClick={props.eventClicks.onEditAvatarClick} src={currentUser.avatar} id="form-picture-trigger" alt="Foto de perfil do usuário" />
          <img src={photoEditIcon} className="profile__edit-button" alt="Ícone de Edição da imagem de perfil" />
        </div>
        <div className="profile-info">
          <div>
            <h1 className="profile__name">{currentUser.name}</h1>
            <img src={openEditPopupSrc} className="profile__edit" onClick={props.eventClicks.onEditProfileClick} id="form-edit-trigger" alt="Botão de edição dos campos Nome e Sobre" />
          </div>
          <h2 className="profile__about">{currentUser.about}</h2>
        </div>
        <img src={openAddPopupSrc} className="profile__add" onClick={props.eventClicks.onAddPlaceClick} id="form-image-trigger" alt="Botão de adicionar imagens á galeria" />
      </section>
      <section className="gallery">
        {cards.map((card, i) => (
          <Card
            key={i}
            name={card.name}
            link={card.link}
            likes={card.likes}
            _id={card._id}
            owner={card.owner}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onCardClick={props.eventClicks.handleCardClick}
          />
          ))
        }
      </section>
    </main>
  );
}

export default Main;