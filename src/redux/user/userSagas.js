import { takeLatest, put,all,call } from "redux-saga/effects";
import userActionTypes from "./userActionTypes";
import {auth, googleProvider,createUserProfileDocument} from '../../firebase/firebase';
import { googleSignInSuccess, googleSignInFailure,emailSignInSuccess,emailSignInFailure } from "./userActions";

export function* signInWithGoogle(){
   try{
     const {user}=yield auth.signInWithPopup(googleProvider);
     const userRef= yield call(createUserProfileDocument,user);
     const userSnapShot=yield userRef.get();
     yield put(
       googleSignInSuccess({id:userSnapShot.id,...userSnapShot.data()})
       );
   }
   catch(error){
     console.log(error);
     yield put(googleSignInFailure(error));
   }
}

export function* signInWithEmail({payload:{email,password}}){
   try{
    const {user}=yield auth.signInWithEmailAndPassword(email,password);
    const userRef= yield call(createUserProfileDocument,user);
    const userSnapShot=yield userRef.get();
    yield put(
      emailSignInSuccess({id:userSnapShot.id,...userSnapShot.data()})
      );
   }
   catch(error){
    yield put(emailSignInFailure(error));
   }
}

export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_START,signInWithGoogle)
}

export function* onEmailSignInStart(){
  yield takeLatest(userActionTypes.EMAIL_SIGN_START,signInWithEmail);
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart)]);
}