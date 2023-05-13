import exitIconSrc from '../images/vector__add.svg'
import trashIconSrc from '../images/trash-icon.svg'
import likeIconSrc from '../images/vector__like-button.svg'

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="page">
      <div id="opacity-block">
        <Header />
        <Main />
        <Footer />
      </div>
      <section className="form popup popup_hidden" id="form-edit">
        <img src={exitIconSrc} className="form__exit" alt="Botão de fechar o pop-up" />
        <form name="info" className="form__items" noValidate>
          <h1 className="form__title">Editar Perfil</h1>
          <fieldset className="form__input-container">
            <label className="form__field">
              <input type='text' className="form__input" placeholder="Nome" minLength="2" maxLength="40" required />
              <span className="form__input-error"></span>
            </label>
            <label className="form__field">
              <input type='text' className="form__input" placeholder="Sobre mim" minLength="2" maxLength="200" required />
              <span className="form__input-error"></span>
            </label>
            <button type="submit" className="form__button">Salvar</button>
          </fieldset>
        </form>
      </section>
      <section className="form popup popup_hidden" id='form-image'>
        <img src={exitIconSrc} className="form__exit" alt="Botão de fechar o pop-up" />
        <form name="place" className="form__items" noValidate>
          <h1 className="form__title">Novo local</h1>
          <fieldset className="form__input-container">
            <label className="form__field">
              <input className="form__input" type="text" placeholder="Título" minLength="2" maxLength="30" required />
              <span className="form__input-error"></span>
            </label>
            <label className="form__field">
              <input className="form__input" type="url" placeholder="URL da imagem" required />
              <span className="form__input-error"></span>
            </label>
            <button type="submit" className="form__button">Criar</button>
          </fieldset>
        </form>
      </section>
      <section className="image-click popup popup_hidden">
        <div className="image-click__block">
          <img src={exitIconSrc} className="image-click__exit" alt="Botão de fechar o pop-up" />
          <img className='image-click-open' alt="Imagem adicionada pelo usuário" />
          <p className="image-click__name"></p>
        </div>
      </section>
      <section className="form popup popup_hidden" id="form-confirmation">
        <img src={exitIconSrc} className="form__exit" alt="Botão de fechar o pop-up" />
        <div className="form__items">
          <h1 className="form__title">Tem certeza ?</h1>
          <button type="submit" className="form__button">Sim</button>
        </div>
      </section>
      <section className="form popup popup_hidden" id="form-picture">
        <img src={exitIconSrc} className="form__exit" alt="Botão de fechar o pop-up" />
        <form name="picture" className="form__items" noValidate>
          <h1 className="form__title">Alterar foto de perfil</h1>
          <fieldset className="form__input-container">
            <label className="form__field">
              <input className="form__input" type="url" placeholder="URL da imagem" required />
              <span className="form__input-error"></span>
            </label>
            <button type="submit" className="form__button">Salvar</button>
          </fieldset>
        </form>
      </section>
      <template className="default-template">
        <div className="item">
          <img className="item__image" src="#" alt="Imagem adicionada pelo usuário" />
          <img src={trashIconSrc} className="item__trash-icon" id="form-confirmation-trigger" alt="Ícone de lixo, para excluir a foto desejada" />
          <div className="item__container">
            <h1 className="item__title"></h1>
            <div>
              <img src={likeIconSrc} className="item__like" alt="Um coração com a função de curtir a imagem" />
              <p className="item__likes">0</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
