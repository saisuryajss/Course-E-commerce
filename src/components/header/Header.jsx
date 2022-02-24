import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Header.css';
import {ReactComponent as Logo} from '../../assets/crown.svg';

function Header(){
    const navigate=useNavigate();
   return (
       <div className='header'>
            <ul>
               <li className='header-img-holder' onClick={()=>navigate('/')}><Logo /></li> 
               <div className='header-items'>
               <li  onClick={()=>navigate('/shop')}>SHOP</li>
               <li  onClick={()=>navigate('/contact')}>CONTACT</li>
               <li  onClick={()=>navigate('/login')}>SIGN IN</li>
               </div>
            </ul>
       </div>
   );
}

export default Header;