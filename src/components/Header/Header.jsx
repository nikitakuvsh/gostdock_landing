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
                    <a href="#about" className='header__nav-item'>О сервисе</a>
                    <a href="#functions" className='header__nav-item'>Основные функции</a>
                    {/* <a href="#howItWork" className='header__nav-item'>Как это работает</a> */}
                    <a href="#help" className='header__nav-item'>Поддержка</a>
                    <button className='header__nav-button' onClick={() => window.open('https://gostdoc.computernetthings.ru/', '_blank')}>Авторизация</button>
                </div>
                
            </div>
        </header>
    );
}