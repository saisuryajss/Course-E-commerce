import React from 'react';
import {useNavigate} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {useDispatch,useSelector} from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from  '../cart-dropdown/CartDropdown';
import {selectCurrentUser} from '../../redux/user/userSelectors';
import {selectCartHidden} from '../../redux/cart/cartSelectors';
import {HeaderContainer,HeaderItems,HeaderList,HeaderListItem} from './HeaderStyles';
import {signOutStart} from '../../redux/user/userActions';

function Header(){
    const currentUser=useSelector(selectCurrentUser);
    const hidden=useSelector(selectCartHidden);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
   return (
       <HeaderContainer>
            <HeaderList>
               <HeaderListItem  onClick={()=>navigate('/')}><Logo /></HeaderListItem> 
               <HeaderItems>
               <HeaderListItem  onClick={()=>navigate('/shop')}>SHOP</HeaderListItem>
               {  
                    currentUser? 
                    <HeaderListItem onClick={()=>dispatch(signOutStart())} >SIGN OUT </HeaderListItem> 
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

export default Header;