import React from 'react';
import exitIconSrc from '../images/vector__add.svg'

export default function PopupWithForm(props) {
  let isOpen = props.popupState

  function submitForm(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <section className={`form popup ${isOpen ? 'popup_is-opened' : ''}`} name={props.name} id={`form-${props.name}`}>
        <img src={exitIconSrc} className="form__exit" onClick={props.onClose} alt="Botão de fechar o pop-up" />
        <form name="info" className="form__items" noValidate>
          <h1 className="form__title">{props.title}</h1>
          <fieldset className="form__input-container">
            <label className="form__field">
              <input type='text' className="form__input" placeholder="Nome" minLength="2" maxLength="40" required />
              <span className="form__input-error"></span>
            </label>
            <label className="form__field">
              <input type='text' className="form__input" placeholder="Sobre mim" minLength="2" maxLength="200" required />
              <span className="form__input-error"></span>
            </label>
            <button type="submit" className="form__button" onClick={submitForm}>Salvar</button>
          </fieldset>
        </form>
      </section>
    </>
  );
}