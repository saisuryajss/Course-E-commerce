import {React, useState} from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/FormInput';
import './SignIn.css';
import CustomButton from '../custom-button/CustomButton';
import {signInWithGoogle,auth} from '../../firebase/firebase';
import {googleSignInStart} from '../../redux/user/userActions';

function SignIn(props){
   const [login,setLogin] = useState({
       email:'',
       password:''
   });

  async function handleSubmit(event){
    event.preventDefault();
    const {email,password}=login;
    try{
        await auth.signInWithEmailAndPassword(email,password);
        setLogin({
            email:'',
            password:''
        });
    }
    catch(error){
        console.log(error);
    }  
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
  
  const {googleSignInStart}=props;

   return(
       <div className='signin-component'>
           <h1>I already have an account</h1>
           <h3>Sign in with your email and password</h3>
           <form onSubmit={handleSubmit}>
              <FormInput name='email' label={'Email'} type='email' handleChange={handleChange} value={login.email} required />
              <FormInput name='password' label={'Password'} type='password' handleChange={handleChange} value={login.password} required />
              <div className='signin-options'>
              <CustomButton type={'submit'} size={'button-medium'} > SIGN IN </CustomButton>
              <CustomButton type={'button'} onClick={googleSignInStart} size={'button-large'} > SIGN IN WITH GOOGLE </CustomButton>
              </div>
           </form>
       </div>
   );
  
}

const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart())
});

export default connect(null,mapDispatchToProps)(SignIn);