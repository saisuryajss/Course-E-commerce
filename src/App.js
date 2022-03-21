import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';
import Checkout from './pages/checkout/Checkout';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function App({ user}) {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/*' element={<ShopPage />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <SignInSignUp />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
})



const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
