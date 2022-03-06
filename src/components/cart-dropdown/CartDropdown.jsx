import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.css';
import {CartItem} from '../cart-item/CartItem.jsx';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';

const CartDropdown = ({cartItems}) => {
    return (<div className='cart-dropdown'>
        <div className='cart-items'>
            {
             cartItems.map((cartItem)=>(<CartItem key={cartItem.id} item={cartItem} />))
            }   
        </div>
        <div className='button-container'>
            <CustomButton size='button-medium' type='button' > GO TO CHECKOUT </CustomButton>
        </div>
    </div>);
}

const mapStateToProps=(state)=>({
 cartItems:selectCartItems(state)
})

export default connect(mapStateToProps,null)(CartDropdown);