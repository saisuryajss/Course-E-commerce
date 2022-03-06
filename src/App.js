import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
import {setCurrentUser} from './redux/user-reducer/userActions';
import {selectCurrentUser} from './redux/user-reducer/userSelectors';
import Checkout from './pages/checkout/Checkout';

import { useEffect } from 'react';
import React from 'react';

import {auth, createUserProfileDocument} from './firebase/firebase';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

function App({user,setCurrentUser}) {
  useEffect(() => {
      auth.onAuthStateChanged(async userAuth=>{
       if(userAuth){
       const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot)=>{
         setCurrentUser({
           id:snapShot.id,   
           ...snapShot.data()
         });
       });
     }
     else
     setCurrentUser(userAuth);
    });
    },[setCurrentUser]);

  return (
    <div>
     <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/login' element={user?<Navigate to='/' /> :<SignInSignUp />} /> 
        <Route path='/checkout' element={<Checkout />} />
        </Routes>
    </div>
  );
}

const mapStateToProps=createStructuredSelector({
  user:selectCurrentUser
})


const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
