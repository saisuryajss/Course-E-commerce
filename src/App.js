
import { Routes , Route, matchRoutes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';

function Taps(){
  return (
    <div>
      <h1>Taps</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/hats' element={<Taps />} />
    </Routes>
  );
}

export default App;
