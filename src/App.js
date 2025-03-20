import { BrowserRouter } from 'react-router-dom';
import useSmoothScroll from './smoothScroll';
import './main.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import HowItWork from './components/HowItWork/HowItWork';
import Functional from './components/Functional/Functional';

function App() {
  useSmoothScroll();
  return (
    <BrowserRouter>
      <div className="app">
        <div className='fixed__container'>
          <Header />
        </div>
          <MainPage />
        <div className='black-rectangle'>
          <div className='fixed__container'>
            <HowItWork />
            <Functional />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
