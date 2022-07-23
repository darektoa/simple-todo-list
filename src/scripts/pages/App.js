import '../../styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from '../components/Header';


const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}


const Main = () => {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
