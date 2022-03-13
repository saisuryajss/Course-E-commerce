import React from 'react';
import {useNavigate} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from  '../cart-dropdown/CartDropdown';
import {selectCurrentUser} from '../../redux/user-reducer/userSelectors';
import {selectCartHidden} from '../../redux/cart/cartSelectors';
import {createStructuredSelector} from 'reselect';
import {HeaderContainer,HeaderItems,HeaderList,HeaderListItem} from './HeaderStyles';

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
       <HeaderContainer>
            <HeaderList>
               <HeaderListItem  onClick={()=>navigate('/')}><Logo /></HeaderListItem> 
               <HeaderItems>
               <HeaderListItem  onClick={()=>navigate('/shop')}>SHOP</HeaderListItem>
               <HeaderListItem  onClick={()=>navigate('/contact')}>CONTACT</HeaderListItem>
               {  
                    user? 
                    <HeaderListItem onClick={logOut} >SIGN OUT </HeaderListItem> 
                    : <HeaderListItem  onClick={()=>navigate('/login')}>SIGN IN</HeaderListItem>
               }
               <CartIcon />
               </HeaderItems>
            </HeaderList>
            {
              hidden?null:<CartDropdown navigate={navigate}/>
            }
       </HeaderContainer>
   );
}

const mapStateToProps=createStructuredSelector({
    user:selectCurrentUser,
    hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);