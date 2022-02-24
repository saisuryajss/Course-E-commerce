import {React, useState} from 'react';
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
              <input type='email' onChange={handleChange} placeholder='Email' value={login.email} required />
              <input type='password' onChange={handleChange} placeholder='Password' value={login.password} required />
              <input type='submit' />
           </form>
       </div>
   );
  
}

export default SignIn;