import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Header.css';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from  '../cart-dropdown/CartDropdown';
import {selectCurrentUser} from '../../redux/user-reducer/userSelectors';
import {selectCartHidden} from '../../redux/cart/cartSelectors';
import {createStructuredSelector} from 'reselect';

function Header({user,hidden}){
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
                    user? 
                    <li onClick={logOut} >SIGN OUT </li> 
                    : <li  onClick={()=>navigate('/login')}>SIGN IN</li>
               }
               <CartIcon />
               </div>
            </ul>
            {
              hidden?null:<CartDropdown navigate={navigate}/>
            }
       </div>
   );
}

const mapStateToProps=createStructuredSelector({
    user:selectCurrentUser,
    hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);