import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')

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
    <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title="Editar Perfil" name="edit">
      <label className="form__field">
        <input type='text' className="form__input" onChange={handleNameChange} placeholder="Nome" />
        <span className="form__input-error"></span>
      </label>
      <label className="form__field">
        <input type='text' className="form__input" onChange={handleAboutChange} placeholder="Sobre mim" />
        <span className="form__input-error"></span>
      </label>
    </PopupWithForm>
  )
}