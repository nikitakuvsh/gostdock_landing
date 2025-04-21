import { BrowserRouter } from 'react-router-dom';
import useSmoothScroll from './smoothScroll';
import './main.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import HowItWork from './components/HowItWork/HowItWork';
import Functional from './components/Functional/Functional';
import { Reviews } from './components/Reviews/Reviews';
import Advantages from './components/Advantages/Advantages';
import { Partners } from './components/Partners/Partners';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className='fixed__container'>
          <Header />
        </div>
          <MainPage />
        <div className='black-rectangle'>
          <div className='fixed__container'>
            {/* <HowItWork /> скрываем после фикса дизайнеров*/}
            <Functional />
          </div>
        </div>
        <Advantages />
        <Reviews />
        <Partners />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
