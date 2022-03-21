import { takeLatest, put, take,all,call } from "redux-saga/effects";
import userActionTypes from "./userActionTypes";
import {auth, googleProvider,createUserProfileDocument} from '../../firebase/firebase';
import { googleSignInSuccess, googleSignInFailure } from "./userActions";

export function* signInWithGoogle(){
   try{
     const {user}=yield auth.signInWithPopup(googleProvider);
     console.log(user);
     const userRef=yield call(createUserProfileDocument,user);
     const userSnapShot=userRef.get();
     console.log(userSnapShot);
     yield put(googleSignInSuccess({id:userSnapShot.id,...userSnapShot.data()}));
   }
   catch(error){
     yield put(googleSignInFailure(error));
   }
}

export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_START,signInWithGoogle)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart)]);
}