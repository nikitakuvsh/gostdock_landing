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
                    <a className='header__nav-item' href='#'>О сервисе</a>
                    <a className='header__nav-item' href='#'>Основные функции</a>
                    <a className='header__nav-item' href='#'>Как это работает</a>
                    <a className='header__nav-item' href='#'>Поддержка</a>
                    <button className='header__nav-button'>Авторизация</button>
                </div>
                
            </div>
        </header>
    );
}