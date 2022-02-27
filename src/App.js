
import { Routes , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
import {useState,useEffect} from 'react';
import {auth} from './firebase/firebase';

function App() {
  let [user,setUser]=useState({});
  useEffect(()=>{
    auth.onAuthStateChanged(currUser=>{
      setUser(currUser);
 });
  },[user]);
  return (
    <div>
      <Header currentUser={user} />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/login' element={<SignInSignUp />} />
    </Routes>
    </div>
  );
}

export default App;
