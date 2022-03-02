import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Header.css';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

function Header({currentUser}){
    console.log(currentUser);
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
                    <li onClick={logOut} >SIGN OUT </li> 
                    : <li  onClick={()=>navigate('/login')}>SIGN IN</li>
               }
               <CartIcon />
               </div>
            </ul>
            <CartDropdown />
       </div>
   );
}

const mapStateToProps=(state)=>({
    currentUser:state.user.user
});

export default connect(mapStateToProps)(Header);