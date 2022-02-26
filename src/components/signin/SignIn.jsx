import {React, useState} from 'react';
import FormInput from '../form-input/FormInput';
import './SignIn.css';
import CustomButton from '../custom-button/CustomButton';

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
     setLogin((prevValue)=>{
         if(type==='email'){
            return {
                    email:value,
                    password:prevValue.password
                }
         }
         else if(type==='password'){
            return{
                email:prevValue.email,
                password:value
            }
         }
     });
  }
  
   return(
       <div>
           <h1>I already have an account</h1>
           <h3>Sign in with your email and password</h3>
           <form onSubmit={handleSubmit}>
              <FormInput label={'Email'} type='email' handleChange={handleChange} value={login.email} required />
              <FormInput label={'Password'} type='password' handleChange={handleChange} value={login.password} required />
              <CustomButton type={'submit'} value={'SIGN IN'} size={'medium'}/>
              <CustomButton type={'submit'} value={'SIGN IN WITH GOOGLE'} size={'large'} />
           </form>
       </div>
   );
  
}

export default SignIn;