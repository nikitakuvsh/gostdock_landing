import tgImage from "../../images/icons/tg.svg";
import vkImage from "../../images/icons/vk.svg";
import arrowImage from "../../images/icons/arrow.svg";
import logoImage from "../../images/pictures/logo.svg";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__top-container" id="help">
        <div className="footer__text-wrapper">
          <h2 className="footer__title">
            НАПИШИТЕ <br /> НАМ
          </h2>
          <a href="mailto:support@gostdok.ru" className="footer__email">
            support@gostdok.ru
          </a>
          <div className="footer__socials">
            <span className="footer__socials-link">
              <img
                src={tgImage}
                alt="Иконка Телеграмма"
                className="footer__img"
              />
            </span>
            <span className="footer__socials-link">
              <img
                src={vkImage}
                alt="Иконка Вконтакте"
                className="footer__img"
              />
            </span>
            <a
              href="https://gostdoc.computernetthings.ru/"
              className="footer__link"
            >
              Ознакомится бесплатно
            </a>
          </div>
          <img src={arrowImage} alt="Стрелка" className="footer__arrow" />
        </div>
        <form className="footer__form" action="#" method="post">
          <div className="footer__form-group">
            <input
              className="footer__input"
              type="text"
              name="formName"
              id="formName"
              required
              placeholder="Ваше имя"
            />
            <input
              className="footer__input"
              type="email"
              name="formEmail"
              id="formEmail"
              required
              placeholder="Почта"
            />
            <input
              className="footer__input"
              type="tel"
              name="formPhone"
              id="formPhone"
              required
              placeholder="+7 (123) 456 78 90"
            />
          </div>
          <div className="footer__form-content">
            <textarea
              className="footer__textarea"
              name="formComment"
              id="formComment"
              rows="5"
              placeholder="Комментарий"
            ></textarea>
            <div className="footer__form-aside">
              <button className="footer__form-button" type="submit">
                Отправить
              </button>
              <p className="footer__form-disclaimer">
                Нажимая кнопку "Отправить", вы подтверждаете свое согласие с
                условиями Пользовательского соглашения
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="footer__bottom-container">
        <div className="footer__info">
          <div className="footer__logo">
            <img src={logoImage} alt="Логотип" className="footer__logo-icon" />
            <span className="footer__logo-text">
              Разработан в рамках проектной деятельности
            </span>
          </div>
          <nav className="footer__nav">
            <a href="#about" className="footer__nav-link">О сервисе</a>
            <a href="#functions" className="footer__nav-link">Основные функции</a>
            <a href="#howItWork" className="footer__nav-link">Как это работает</a>
            <a href="#reviews" className="footer__nav-link">Отзывы</a>
            <a href="#help" className="footer__nav-link">Поддержка</a>
          </nav>
          <a href="tel:81234567890" className="footer__phone">
            8 123 456 78 90
          </a>
        </div>
        <span className="footer__watermark">© Веб-студия PolyWeb, 2024</span>
      </div>
    </div>
  );
}
