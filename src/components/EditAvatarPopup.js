import React, { useRef } from "react";
import exitIconSrc from '../images/vector__add.svg'

export default function EditAvatarPopup(props) {
  const isOpen = props.isOpen;
  const avatarRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <section className={`form popup ${isOpen ? 'popup_is-opened' : ''}`} name='picture' id={`form-picture`}>
      <img src={exitIconSrc} className="form__exit" onClick={props.onClose} alt="Botão de fechar o pop-up" />
      <form name="info" className="form__items" onSubmit={handleSubmit} noValidate>
        <h1 className="form__title">Atualizar foto de perfil</h1>
        <fieldset className="form__input-container">
          <label className="form__field">
            <input type='url' ref={avatarRef} className="form__input" placeholder="Url de imagem" required />
            <span className="form__input-error"></span>
          </label>
          <button type="submit" className="form__button">Salvar</button>
        </fieldset>
      </form>
    </section>
  )
}

//    <PopupWithForm
//      name={'picture'}
//      title={'Atualizar foto de perfíl'}
//      firstInput={handleNameChange}
//      firstInputValue={currentUser.avatar}
//      secondInput={''}
//      secondInputValue={''}
//      isOpen={props.isOpen}
//      onClose={props.onClose}
//      onSubmit={handleSubmit}
//    />