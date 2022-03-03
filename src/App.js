import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import {auth, createUserProfileDocument} from './firebase/firebase';
import {setCurrentUser} from './redux/user-reducer/userActions';

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
      </Routes>
    </div>
  );
}

const mapStateToProps=({user:{user}})=>{
  return {
    user
  };
}


const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
