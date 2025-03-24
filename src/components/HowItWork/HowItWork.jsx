import './HowItWork.css';
import createDocumentImage from '../../images/icons/document.svg';
import connectionDocumentsImage from '../../images/icons/more-documents.svg';
import refreshDocumentsImage from '../../images/icons/refresh.svg';
import howItWorkImage from '../../images/pictures/how-it-work-image.svg';

export default function HowItWork(){
    return (
        <div className='how-it-work__container' id="howItWork">
            <h2 className='how-it-work__title'>Как это работает</h2>

            <div className='how-it-work__content'>
                <div className='how-it-work__list'>
                    <div className='how-it-work__list-item'>
                        <img className='how-it-work__list-image' alt='иконка' src={createDocumentImage}/>
                        <span className='how-it-work__list-text'>Создание компонента</span>
                    </div>
                    <div className='how-it-work__list-item'>
                        <img className='how-it-work__list-image' alt='иконка' src={connectionDocumentsImage}/>
                        <span className='how-it-work__list-text'>Интеграция компонентов</span>
                    </div>
                    <div className='how-it-work__list-item'>
                        <img className='how-it-work__list-image' alt='иконка' src={refreshDocumentsImage}/>
                        <span className='how-it-work__list-text'>Автоматическое обновление <br /> компонентов</span>
                    </div>
                </div>
                
                <div className='how-it-work__image'>
                    <img className='how-it-work__image-item' alt='Картинка' src={howItWorkImage}/>
                </div>
            </div>
        </div>
    );
}