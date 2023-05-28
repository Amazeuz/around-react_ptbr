import React, { useState } from "react";
import exitIconSrc from '../images/vector__add.svg'
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const isOpen = props.isOpen

  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(evt) {
    setName(evt.target.value)
  }

  function handleAboutChange(evt) {
    setAbout(evt.target.value)
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  function handleSubmit(evt) {
     evt.preventDefault();

     props.onUpdateUser({
       name,
       about
     });
   }

  return (
    <section className={`form popup ${isOpen ? 'popup_is-opened' : ''}`} name='edit' id='edit'>
      <img src={exitIconSrc} className="form__exit" onClick={props.onClose} alt="Botão de fechar o pop-up" />
      <form name="info" className="form__items" onSubmit={handleSubmit} noValidate>
        <h1 className="form__title">Editar foto de perfil</h1>
        <fieldset className="form__input-container">
          <label className="form__field">
            <input type='text' className="form__input" value={name} onChange={handleNameChange} />
            <span className="form__input-error"></span>
          </label>
          <label className="form__field">
            <input type='text' className="form__input" value={about} onChange={handleAboutChange} />
            <span className="form__input-error"></span>
          </label>
          <button type="submit" className="form__button">Salvar</button>
        </fieldset>
      </form>
    </section>
  )
}


//    <PopupWithForm
//      name={'edit'}
//      title={'Editar perfíl'}
//      firstInput={handleNameChange}
//      firstInputValue={name}
//      secondInput={handleAboutChange}
//      secondInputValue={about}
//      isOpen={props.isOpen}
//      onClose={props.onClose}
//      onSubmit={handleSubmit}
//    />
