
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import {auth, createUserProfileDocument} from './firebase/firebase';
import {setCurrentUser} from './redux/user-reducer/userActions';

function App(props) {
  useEffect(() => {
      console.log('in authchange');
      console.log(setCurrentUser);
      auth.onAuthStateChanged(async userAuth=>{
       if(userAuth){
       const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot)=>{
         props.setCurrentUser({
           id:snapShot.id,   
           ...snapShot.data()
         });
       });
     }
     props.setCurrentUser(userAuth);
    });
    });

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

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
