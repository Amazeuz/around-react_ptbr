import React from "react";
import trashIconSrc from '../images/trash-icon.svg'
import likeIconSrc from '../images/vector__like-button.svg'

export default function Card(props) {
  return (
    <div className="item" key={props.key}>
      <img className="item__image" src={`${props.link}`} alt="Imagem adicionada pelo usuário" />
      <img src={trashIconSrc} className="item__trash-icon" id="form-confirmation-trigger" alt="Ícone de lixo, para excluir a foto desejada" />
      <div className="item__container">
        <h1 className="item__title">{props.name}</h1>
        <div>
          <img src={likeIconSrc} className="item__like" alt="Um coração com a função de curtir a imagem" />
          <p className="item__likes">{props.likes.length}</p>
        </div>
      </div>
    </div>
  )
}