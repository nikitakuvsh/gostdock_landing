import './Header.css';
import logoImage from '../../images/pictures/logo.svg';

export default function Header(){
    return (
        <header className='header'>
            <div className='header__content'>

                <div className='header__image-block'>
                    <img className='header__image-item logo' alt='logo' src={logoImage} />
                    <p className='header__image-text'>Разработан в рамках проектной деятельности</p>
                </div>

                <div className='header__nav'>
                    <span className='header__nav-item'>О сервисе</span>
                    <span className='header__nav-item'>Основные функции</span>
                    <span className='header__nav-item'>Как это работает</span>
                    <span className='header__nav-item'>Поддержка</span>
                    <button className='header__nav-button' onClick={() => window.open('https://gostdoc.computernetthings.ru/', '_blank')}>Авторизация</button>
                </div>
                
            </div>
        </header>
    );
}