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
               <li className='header-items' onClick={()=>navigate('/shop')}>SHOP</li>
               <li className='header-items' onClick={()=>navigate('/contact')}>CONTACT</li>
               <li className='header-items' onClick={()=>navigate('/contact')}>SIGN IN</li>
            </ul>
       </div>
   );
}

export default Header;