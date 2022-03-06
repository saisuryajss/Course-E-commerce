import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.css';
import {CartItem} from '../cart-item/CartItem.jsx';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({cartItems}) => {
    return (<div className='cart-dropdown'>
        <div className='cart-items'>
            {
             cartItems.length?
             cartItems.map((cartItem)=>(<CartItem key={cartItem.id} item={cartItem} />))
             :<span className='empty-message'>Your Cart Is Empty</span>
             }   
        </div>
        <div className='button-container'>
            <CustomButton size='button-medium' type='button' > GO TO CHECKOUT </CustomButton>
        </div>
    </div>);
}

const mapStateToProps=createStructuredSelector({
 cartItems:selectCartItems
})

export default connect(mapStateToProps,null)(CartDropdown);