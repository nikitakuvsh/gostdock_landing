import { BrowserRouter } from 'react-router-dom';
import './main.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import HowItWork from './components/HowItWork/HowItWork';
import Functional from './components/Functional/Functional';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <MainPage />
        <div className='black-rectangle'>
          <HowItWork />
          <Functional />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
