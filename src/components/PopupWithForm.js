import React from 'react';
import exitIconSrc from '../images/vector__add.svg'

export default function PopupWithForm(props) {
  const isOpen = props.isOpen

  return (
    <>
      <section className={`form popup ${isOpen ? 'popup_is-opened' : ''}`} name={props.name} id={`form-${props.name}`}>
        <img src={exitIconSrc} className="form__exit" onClick={props.onClose} alt="Botão de fechar o pop-up" />
        <form name="info" className="form__items" onSubmit={props.onSubmit} noValidate>
          <h1 className="form__title">{props.title}</h1>
          <fieldset className="form__input-container">
            <label className="form__field">
              <input type='text' className="form__input" value={props.firstInputValue} onChange={props.firstInput} />
              <span className="form__input-error"></span>
            </label>
            <label className="form__field">
              <input type='text' className="form__input" value={props.secondInputValue} onChange={props.secondInput} />
              <span className="form__input-error"></span>
            </label>
            <button type="submit" className="form__button">Salvar</button>
          </fieldset>
        </form>
      </section>
    </>
  );
}