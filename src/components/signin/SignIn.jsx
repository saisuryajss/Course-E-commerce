import {React, useState} from 'react';
import FormInput from '../form-input/FormInput';
import './SignIn.css';


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
           <h1>Login with your details</h1>
           <form onSubmit={handleSubmit}>
              <FormInput label={'Email'} type='email' handleChange={handleChange} value={login.email} required />
              <FormInput label={'Password'} type='password' handleChange={handleChange} value={login.password} required />
              <input type='submit' />
           </form>
       </div>
   );
  
}

export default SignIn;