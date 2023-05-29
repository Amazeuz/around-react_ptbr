import React, { useRef } from "react";
import exitIconSrc from '../images/vector__add.svg'

export default function AddPlacePopup(props) {
  const isOpen = props.isOpen;
  const cardTitleRef = useRef();
  const cardLinkRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateCards(cardTitleRef.current.value, cardLinkRef.current.value)
  }

  return (
    <section className={`form popup ${isOpen ? 'popup_is-opened' : ''}`} name='image' id={'form-image'}>
      <img src={exitIconSrc} className="form__exit" onClick={props.onClose} alt="Botão de fechar o pop-up" />
      <form name="info" className="form__items" onSubmit={handleSubmit} noValidate>
        <h1 className="form__title">Novo local</h1>
        <fieldset className="form__input-container">
          <label className="form__field">
            <input type='text' className="form__input" ref={cardTitleRef} value={props.firstInputValue} onChange={props.firstInput} />
            <span className="form__input-error"></span>
          </label>
          <label className="form__field">
            <input type='text' className="form__input" ref={cardLinkRef} value={props.secondInputValue} onChange={props.secondInput} />
            <span className="form__input-error"></span>
          </label>
          <button type="submit" className="form__button">Criar</button>
        </fieldset>
      </form>
    </section>
  )
}