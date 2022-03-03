import React from 'react';
import {connect} from 'react-redux';
import './CartIcon.css';
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import toggleCartHidden from '../../redux/cart/cartActions';

const CartIcon=({toggleCartHidden})=>{
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingBag className='shopping-icon'  />
            <span className='item-count'>0</span>
        </div>
    );
}

const mapDispatchToProps=(dispatch)=>({
   toggleCartHidden:()=>dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon);
