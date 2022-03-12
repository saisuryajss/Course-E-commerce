import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './Checkout.css';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripCheckoutButton/StripeCheckout';


function Checkout({ cartItems, total }) {
    return <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        {
            <div className='total-value'>
                Total:{'$' + total}
            </div>
        }
        <div  className='payment-block'>
            <div className='payment-card-details'>
            <span>Use the following details for payment</span>
            <br />
            <span>card no:4242 4242 4242 4242 expiry:01/24 cvv:123</span>
            </div>
        <StripeCheckoutButton price={total} />
        </div>
    </div>
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);