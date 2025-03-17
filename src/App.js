import './main.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import HowItWork from './components/HowItWork/HowItWork';

function App() {
  return (
    <div className="app">
      <Header />
      <MainPage />
      <div className='black-rectangle'>
        <HowItWork />
      </div>
    </div>
  );
}

export default App;
