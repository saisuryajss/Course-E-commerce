import {React, useState} from 'react';
import FormInput from '../form-input/FormInput';
import './SignIn.css';
import CustomButton from '../custom-button/CustomButton';
import {signInWithGoogle} from '../../firebase/firebase';

function SignIn(){
   const [login,setLogin] = useState({
       email:'',
       password:''
   });

   function handleSubmit(event){
    event.preventDefault();
    setLogin({
        email:'',
        password:''
    });
  }

  function handleChange(event){
     const {type,value}=event.target;
     console.log(event.target);
     if(type==='email'){
         setLogin((prevValue)=>{return {email:value,password:prevValue.password}});
     }
     else if(type==='password'){
        setLogin((prevValue)=>{return {email:prevValue.email,password:value}});
     }
  }
  
   return(
       <div className='signin-component'>
           <h1>I already have an account</h1>
           <h3>Sign in with your email and password</h3>
           <form onSubmit={handleSubmit}>
              <FormInput label={'Email'} type='email' handleChange={handleChange} value={login.email} required />
              <FormInput label={'Password'} type='password' handleChange={handleChange} value={login.password} required />
              <CustomButton type={'submit'} size={'button-medium'} > SIGN IN </CustomButton>
              <CustomButton type={'button'} onClick={signInWithGoogle} size={'button-large'} > SIGN IN WITH GOOGLE </CustomButton>
           </form>
       </div>
   );
  
}

export default SignIn;