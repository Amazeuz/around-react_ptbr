import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*Array.from(document.querySelectorAll('.form')).forEach((popup) => {
  let popupElement;

  if (popup.id === 'form-confirmation') {
    popupElement = new PopupWithConfirmation(popup);
    popupElement.setEventListeners();

    const trashIcons = Array.from(document.querySelectorAll('.item__trash-icon'))
    trashIcons.forEach((trashIcon) => {
      trashIcon.addEventListener('click', () => {
        popupConfirmation.open()
        popupConfirmation.deleteCard(trashIcon)

        api.deleteCard()
      })
    })
  }

  api.popupsArray.push(popupElement)
})*/