import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Header.css';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase';

function Header({currentUser}){
    const navigate=useNavigate();
    
    const logOut=async(e)=>{
        e.preventDefault();
        await auth.signOut().then(()=>{
            console.log("successfully logged out");
            navigate('/');
        }).catch(function(error){
            console.log(error);
            console.log('an error occurred');
        });
    }

   return (
       <div className='header'>
            <ul>
               <li className='header-img-holder' onClick={()=>navigate('/')}><Logo /></li> 
               <div className='header-items'>
               <li  onClick={()=>navigate('/shop')}>SHOP</li>
               <li  onClick={()=>navigate('/contact')}>CONTACT</li>
               {  
                    currentUser? 
                    <li onClick={logOut} 
                    >SIGN OUT </li> 
                    : <li  onClick={()=>navigate('/login')}>SIGN IN</li>
               }
               </div>
            </ul>
       </div>
   );
}

export default Header;