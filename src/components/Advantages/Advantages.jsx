import "./Advantages.css";
import clockImage from "../../images/icons/clock.svg";
import refreshImage from "../../images/icons/refresh-circle.svg";
import computerImage from "../../images/icons/computer.svg";
import latexImage from "../../images/icons/latex.svg";
import foldersImage from "../../images/icons/folders.svg";
import fileReloadImage from "../../images/icons/file-reload.svg";

export default function Advantages() {
  return (
    <div className="advantages__container">
      <ul className="advantages__list">
        <li className="advantages__item">
          <img
            src={clockImage}
            alt="Иконка часов"
            className="advantages__image"
          />
          <h3 className="advantages__title">
            Трать меньше времени на оформление документации
          </h3>
          <p className="advantages__description">
            Больше не нужно вручную форматировать паспорта проектов,
            пояснительные записки и презентации — всё автоматизировано
          </p>
        </li>
        <li className="advantages__item">
          <img
            src={computerImage}
            alt="Иконка компьютера"
            className="advantages__image"
          />
          <h3 className="advantages__title">
            Единый формат для всех документов
          </h3>
          <p className="advantages__description">
            Паспорт проекта, пояснительная записка, презентация и постер — всё в
            одном стиле и соответствии с ГОСТ
          </p>
        </li>
        <li className="advantages__item">
          <img
            src={refreshImage}
            alt="Иконка обновления"
            className="advantages__image"
          />
          <h3 className="advantages__title">
            Автоматическое обновление документов
          </h3>
          <p className="advantages__description">
            Внеси изменения один раз, и они мгновенно применятся во всех
            связанных документах
          </p>
        </li>
        <li className="advantages__item">
          <img
            src={latexImage}
            alt="Иконка компьютера"
            className="advantages__image"
          />
          <h3 className="advantages__title">Работа с LaTeX без сложностей</h3>
          <p className="advantages__description">
            Создавай сложные отчёты с формулами и графиками, как в Overleaf, но
            с ещё большим удобством
          </p>
        </li>
        <li className="advantages__item">
          <img
            src={foldersImage}
            alt="Иконка компьютера"
            className="advantages__image"
          />
          <h3 className="advantages__title">
            Удобство работы с большими проектами
          </h3>
          <p className="advantages__description">
            Управляй документацией для проектов любого масштаба без потери
            качества и времени
          </p>
        </li>
        <li className="advantages__item">
          <img
            src={fileReloadImage}
            alt="Иконка компьютера"
            className="advantages__image"
          />
          <h3 className="advantages__title">
            Шаблоны, которые обновляются сами
          </h3>
          <p className="advantages__description">
            Все шаблоны автоматически адаптируются под новые требования.
          </p>
        </li>
      </ul>
    </div>
  );
}
