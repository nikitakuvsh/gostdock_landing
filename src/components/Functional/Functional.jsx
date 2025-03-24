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
                        <span className='functional__list-text'>Компонентный подход для документов</span>
                    </div>
                    <div className='functional__list-item'>
                        <span className='functional__list-number'>2</span>
                        <span className='functional__list-text'>Поддержка LaTeX для сложных форматов</span>
                    </div>
                    <div className='functional__list-item'>
                        <span className='functional__list-number'>3</span>
                        <span className='functional__list-text'>Автоматическое обновление компонентов</span>
                    </div>
                    <div className='functional__list-item'>
                        <span className='functional__list-number'>4</span>
                        <span className='functional__list-text'>Интеграция изображений, таблиц и других <br /> сложных элементов</span>
                    </div>
                </div>

                <div className='functioncal__image'>
                    <img className='functional__image-item' alt='Картинка' src={functionalImage} />
                </div>
            </div>
        </div>
    );
}