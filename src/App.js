import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
import { selectCurrentUser } from './redux/user/userSelectors';
import Checkout from './pages/checkout/Checkout';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {checkUserSession} from './redux/user/userActions';

function App({ CurrentUser,checkUserSession }) {

  useEffect(()=>{
     checkUserSession();
  },[checkUserSession]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/*' element={<ShopPage />} />
        <Route path='/login' element={CurrentUser ? <Navigate to='/' /> : <SignInSignUp />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps=dispatch=>({
   checkUserSession: ()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
