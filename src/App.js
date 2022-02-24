
import { Routes , Route, matchRoutes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';

function App() {
  return (
    <div>
      <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/login' element={<SignInSignUp />} />
    </Routes>
    </div>
  );
}

export default App;
