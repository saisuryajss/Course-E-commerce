import {React, useState} from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/FormInput';
import './SignIn.css';
import CustomButton from '../custom-button/CustomButton';
import {googleSignInStart,emailSignInStart} from '../../redux/user/userActions';

function SignIn({googleSignInStart,emailSignInStart}){
   const [userCredentials,setLogin] = useState({
       email:'',
       password:''
   });

   const {email,password}=userCredentials;

  async function handleSubmit(event){
    event.preventDefault();
    emailSignInStart(email,password);
  }

  function handleChange(event){
     const {name,value}=event.target;
     setLogin((prevLogin)=>{
        return{
            ...prevLogin,
            [name]:value
        }
     });
  }

   return(
       <div className='signin-component'>
           <h1>I already have an account</h1>
           <h3>Sign in with your email and password</h3>
           <form onSubmit={handleSubmit}>
              <FormInput name='email' label={'Email'} type='email' handleChange={handleChange} value={email} required />
              <FormInput name='password' label={'Password'} type='password' handleChange={handleChange} value={password} required />
              <div className='signin-options'>
              <CustomButton type={'submit'} size={'button-medium'} > SIGN IN </CustomButton>
              <CustomButton type={'button'} onClick={googleSignInStart} size={'button-large'} > SIGN IN WITH GOOGLE </CustomButton>
              </div>
           </form>
       </div>
   );
  
}

const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))

});

export default connect(null,mapDispatchToProps)(SignIn);