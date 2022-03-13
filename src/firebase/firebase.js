import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const aws = require('aws-sdk');

let s3 = new aws.S3({
  API_KEY: process.env.API_KEY,
  MSG_ID: process.env.MSG_ID,
  APP_ID: process.env.APP_ID
});

const config={
    apiKey: s3.API_KEY,
    authDomain: "crown-db-bcee5.firebaseapp.com",
    projectId: "crown-db-bcee5",
    storageBucket: "crown-db-bcee5.appspot.com",
    messagingSenderId: s3.MSG_ID,
    appId: s3.APP_ID
  };

firebase.initializeApp(config);
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});


export const auth=firebase.auth();
export const firestore=firebase.firestore();
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;


export const createUserProfileDocument= async(userAuth,additionalData)=>{
  if(!userAuth) return null;
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot=await userRef.get();
  if(!snapShot.exists){
    const {displayName,email}=userAuth;
    const createdAt= new Date();
    try{
       await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
       },()=>{
        console.log('user profile created successfully');
       });
    }
    catch(error){
       console.log('error creating user profile '+ error.message);
    }
  }
  return userRef;
}