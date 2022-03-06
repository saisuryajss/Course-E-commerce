import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.css';
import { CartItem } from '../cart-item/CartItem.jsx';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import toggleCartHidden from '../../redux/cart/cartActions';

const CartDropdown = ({ cartItems, navigate, dispatch }) => {
    return (<div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map((cartItem) => (<CartItem key={cartItem.id} item={cartItem} />))
                    : <span className='empty-message'>Your Cart Is Empty</span>
            }
        </div>
        <div className='button-container'>
            <CustomButton size='button-medium' type='button' onClick={() => {
                navigate('/checkout');
                dispatch(toggleCartHidden());
            }
            } > GO TO CHECKOUT </CustomButton>
        </div>
    </div>);
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);