import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')

  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(evt) {
    setName(evt.target.value)
    currentUser.name = evt.target.value
  }

  function handleAboutChange(evt) {
    setAbout(evt.target.value)
    currentUser.about = evt.target.value
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
    <PopupWithForm
      name={'edit'}
      title={'Editar perfíl'}
      firstInput={handleNameChange}
      firstInputValue={name}
      secondInput={handleAboutChange}
      secondInputValue={about}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  )
}