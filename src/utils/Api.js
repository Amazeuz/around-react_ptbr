class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._authorization = options.headers.authorization;
    this.popupsArray = []
  }

  loadUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Algo deu errado: ${res.status}`);
    })
    .catch((err) => {
      console.log("Erro. A solicitação falhou: ", err);
    });
  }

  getServerCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization,
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Algo deu errado: ${res.status}`);
    })
    .catch((err) => {
      console.log("Erro. A solicitação falhou: ", err);
    });
  }

  _loadingForm(formElement, isLoading, buttonDefaultText) {
    const formButton = formElement._popupElement.querySelector('.form__button')

    if (isLoading) {
      formButton.textContent = "Salvando..."
    }
    else {
      formElement.close()
      setTimeout(() => {formButton.textContent = buttonDefaultText}, 1000)
    }
  }

  _getFormElement(formId) {
    let formElement;

    this.popupsArray.forEach((form) => {
      if (form._popupElement.id === formId) {
        formElement = form
      }
    })

    return formElement;
  }

  addServerCard(name, link) {
    const formElement = this._getFormElement('form-image')

    this._loadingForm(formElement, true, 'Criar')
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Algo deu errado: ${res.status}`);
    })
    .catch((err) => {
      console.log("Erro. A solicitação falhou: ", err);
    })
    .finally(() => {
      this._loadingForm(formElement, false, 'Criar')
    })
  }

  editUserInfo({firstInput, secondInput}) {
    const formElement = this._getFormElement('form-edit')

    this._loadingForm(formElement, true, 'Salvar')
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: firstInput,
        about: secondInput
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Algo deu errado: ${res.status}`);
    })
    .catch((err) => {
      console.log("Erro. A solicitação falhou: ", err);
    })
    .finally(() => {
      this._loadingForm(formElement, false, 'Salvar')
    })
  }

  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Algo deu errado: ${res.status}`);
    })
    .catch((err) => {
      console.log("Erro. A solicitação falhou: ", err);
    })
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Algo deu errado: ${res.status}`);
    })
    .catch((err) => {
      console.log("Erro. A solicitação falhou: ", err);
    })
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Algo deu errado: ${res.status}`);
    })
    .catch(err => {
      console.log("Erro. A solicitação falhou: ", err);
    })
  }

  changeProfilePicture(data) {
    const formElement = this._getFormElement('form-picture')
    this._loadingForm(formElement, true, 'Salvar')
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        avatar: data[0]
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Algo deu errado: ${res.status}`);
    })
    .catch(err => {
      console.log("Erro. A solicitação falhou: ", err);
    })
    .finally(() => {
      this._loadingForm(formElement, false, 'Salvar')
    })
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_cohort_03",
  headers: {
    authorization: "49a188cf-9e1d-457c-becd-1d6b283140a7",
    "Content-Type": "application/json"
  }
});