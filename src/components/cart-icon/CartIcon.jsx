import React from 'react';
import { connect } from 'react-redux';
import './CartIcon.css';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import toggleCartHidden from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ itemCount, toggleCartHidden }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
