import logoImage from "../../images/pictures/polytechLogo.png";
import "./Partners.css";

export function Partners() {
  return (
    <div className="partners__container">
        <h2 className="partners__title">Партнеры</h2>
      <ul className="partners__list">
        <li className="partners__item">
          <img
            src={logoImage}
            alt="Логотип Московского Политеха"
            className="partners__img"
          />
          <p className="partners__text">
            Разработан в рамках проектной деятельности
          </p>
        </li>
        <li className="partners__item">
          <img
            src={logoImage}
            alt="Логотип Московского Политеха"
            className="partners__img"
          />
          <p className="partners__text">
            Разработан в рамках проектной деятельности
          </p>
        </li>
        <li className="partners__item">
          <img
            src={logoImage}
            alt="Логотип Московского Политеха"
            className="partners__img"
          />
          <p className="partners__text">
            Разработан в рамках проектной деятельности
          </p>
        </li>
        <li className="partners__item">
          <img
            src={logoImage}
            alt="Логотип Московского Политеха"
            className="partners__img"
          />
          <p className="partners__text">
            Разработан в рамках проектной деятельности
          </p>
        </li>
      </ul>
    </div>
  );
}
