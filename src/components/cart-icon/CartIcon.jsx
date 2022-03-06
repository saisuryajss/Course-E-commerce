import React from 'react';
import { connect } from 'react-redux';
import './CartIcon.css';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import toggleCartHidden from '../../redux/cart/cartActions';

const CartIcon = ({ itemCount, toggleCartHidden }) => {
    console.log(itemCount);
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount:cartItems.reduce((accumulator,currentItem)=>accumulator=accumulator+currentItem.quantity,0)
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
