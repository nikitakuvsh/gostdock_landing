import './Functional.css';
import functionalImage from '../../images/pictures/functional-image.svg';

export default function Functional(){
    return (
        <div className='functional__container' id="functions">
            <h2 className='functional__title'>Основные функции</h2>
            <div className='functional__content'>
                <div className='functional__list'>
                    <div className='functional__list-item'>
                        <span className='functional__list-number number--fix'>1</span>
                        <span className='functional__list-text'>Составной подход для документов</span>
                    </div>
                    <div className='functional__list-item'>
                        <span className='functional__list-number'>2</span>
                        <span className='functional__list-text'>Поддержка LaTeX для сложных форматов</span>
                    </div>
                    <div className='functional__list-item'>
                        <span className='functional__list-number'>3</span>
                        <span className='functional__list-text'>Автоматическое обновление элементов документа</span>
                    </div>
                    <div className='functional__list-item'>
                        <span className='functional__list-number'>4</span>
                        <span className='functional__list-text'>Интеграция изображений, таблиц и других <br /> сложных элементов</span>
                    </div>
                </div>

                <div className='functioncal__image'>
                    <img className='functional__image-item' alt='Картинка' src={functionalImage} />
                    <div className='functional__text'>
                        <span className='functional__text-item'>Для студентов</span>
                        <span className='functional__text-item'>Для преподавателей</span>
                        <span className='functional__text-item'>Для проектных команд</span>
                    </div>
                </div>
            </div>
        </div>
    );
}