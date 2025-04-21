import './MainPage.css';
import womanImage from '../../images/pictures/main-page-image-1.svg';
import laptopImage from '../../images/pictures/main-page-image-2.svg';
import manImage from '../../images/pictures/main-page-image-3.svg';

export default function MainPage(){
    return (
        <div className='main-page__container' id="about">
            <h2 className='main-page__title'>ГОСТДОК - автоматизация оформления документов</h2>
            <span className='main-page__subtitle'>Создавайте документы по ГОСТу быстро и без ошибок с поддержкой LaTeX {window.innerWidth < 900 ? '' : <br />} и автоматическим обновлением компонентов</span>
            <div className='main-page__content'>
                <button className='main-page__button' onClick={() => window.open('https://gostdoc.computernetthings.ru/', '_blank')}>Попробовать здесь</button>
            </div>
            <img className='main-page__sticker sticker--woman' alt='sticker' src={womanImage}/>
            <img className='main-page__sticker sticker--laptop' alt='sticker' src={laptopImage}/>
            <img className='main-page__sticker sticker--man' alt='sticker' src={manImage}/>
        </div>
    );
}