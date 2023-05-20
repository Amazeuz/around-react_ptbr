import React from "react";
import exitIconSrc from '../images/vector__add.svg'

export default function ImagePopup(props) {
  let cardImage = ''
  let cardName = ''
  if (props.card) {
    cardImage = props.card.querySelector('.item__image').src;
    cardName = props.card.querySelector('.item__title').textContent;
  }

  return (
    <section className={`image-click popup ${props.card ? 'popup_is-opened' : ''}`}>
      <div className="image-click__block">
        <img src={exitIconSrc} className="image-click__exit" onClick={props.onClose} alt="Botão de fechar o pop-up" />
        <img className='image-click-open' src={cardImage} alt="Imagem adicionada pelo usuário" />
        <p className="image-click__name">{cardName}</p>
      </div>
    </section>
  );
}