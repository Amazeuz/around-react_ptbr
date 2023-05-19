import React from "react";
import exitIconSrc from '../images/vector__add.svg'

export default function ImagePopup() {
  return (
    <section className="image-click popup">
    <div className="image-click__block">
      <img src={exitIconSrc} className="image-click__exit" alt="Botão de fechar o pop-up" />
      <img className='image-click-open' alt="Imagem adicionada pelo usuário" />
      <p className="image-click__name"></p>
    </div>
  </section>
  );
}